from django.db import models
from django.utils import timezone
from django.utils.html import mark_safe
from datetime import timedelta
from django.utils.translation import ugettext as _
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill


class Category(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name_plural = 'categories'

    def __str__(self):
        return str(self.name)


class Ingredient(models.Model):
    TYPE_LIQUID = 'L'
    TYPE_SOLID = 'S'
    TYPE_UNIT = 'U'

    TYPE_CHOICES = (
        (TYPE_LIQUID, 'Liquid'),
        (TYPE_SOLID, 'Solid'),
        (TYPE_UNIT, 'Unit(leaves, pieces)'),
    )
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=1, choices=TYPE_CHOICES, default='S')

    def __str__(self):
        return str(self.name)


class Diet(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return str(self.name)


class Course(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return str(self.name)


class Cuisine(models.Model):
    name = models.CharField(max_length=60)

    def __str__(self):
        return str(self.name)


class Recipe(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=2000, blank=True)
    category = models.ForeignKey(
        Category, null=True, blank=True, on_delete=models.SET_NULL)
    course = models.ForeignKey(
        Course, null=True, blank=True, default='5', on_delete=models.SET_DEFAULT)
    cuisine = models.ForeignKey(
        Cuisine, null=True, blank=True, on_delete=models.SET_NULL)
    diet = models.ManyToManyField(Diet, default=10,
                                  related_name="%(app_label)s_%(class)s_related",
                                  related_query_name="%(app_label)s_%(class)ss",)
    serves = models.PositiveSmallIntegerField(default=1)
    prep_time = models.DurationField(
        default=timedelta(), null=False, blank=False)
    cooking_time = models.DurationField(
        default=timedelta(), null=False, blank=False)
    image = models.ImageField(_(""), default='avatar.png', upload_to='uploads/%Y/%m/%d/',
                              height_field=None, width_field=None, max_length=None)
    # thumbnail is not a database field, only displayed in admin for convenienve purposes
    thumbnail = ImageSpecField(source='image',
                                      processors=[ResizeToFill(100, 100)],
                                      format='JPEG',
                                      options={'quality': 60})
    date_created = models.DateTimeField(default=timezone.now)

    def total_time(self):
        return self.prep_time + self.cooking_time

    # Delete images from server on update & delete
    def remove_on_image_update(self):
        try:
            # is the object in the database yet?
            obj = Recipe.objects.get(id=self.id)
        except Recipe.DoesNotExist:
            # object is not in db, nothing to worry about
            return
        # is the save due to an update of the actual image file?
        if obj.image and self.image and obj.image != self.image:
            # delete the old image file from the storage in favor of the new file
            obj.image.delete()

    def delete(self, *args, **kwargs):
        # object is being removed from db, remove the file from storage first - except default image
        if self.image.name != 'avatar.png':
            self.image.delete()

        return super(Recipe, self).delete(*args, **kwargs)

    def save(self, *args, **kwargs):
        # object is possibly being updated, if so, clean up.
        self.remove_on_image_update()
        return super(Recipe, self).save(*args, **kwargs)

    def __str__(self):
        return str(self.title)


class Cut(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return str(self.name)


class Quantity(models.Model):
    SYSTEM_IMPERIAL = 'I'
    SYSTEM_METRIC = 'M'

    SYSTEM_CHOICES = (
        (SYSTEM_IMPERIAL, 'Imperial'),
        (SYSTEM_METRIC, 'Metric'),
    )

    recipe = models.ForeignKey('Recipe', on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    system = models.CharField(
        max_length=1, choices=SYSTEM_CHOICES, default='M')
    name = models.FloatField(
        help_text="Please use the following format: <em>N.N<em>.")
    cut = models.ForeignKey(Cut, null=True, blank=True,
                            on_delete=models.SET_NULL)

    class Meta:
        verbose_name_plural = 'quantities'

    def __str__(self):
        return str(self.name)


class RecipeStep(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    step_number = models.PositiveSmallIntegerField(default=1)
    step_description = models.CharField(max_length=2000)

    def __str__(self) -> str:
        return f'{self.step_number} for {self.recipe}'
