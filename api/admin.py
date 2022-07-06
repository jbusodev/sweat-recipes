from api.forms import RecipeModelForm
from django import forms
from django.contrib import admin
from django.db import models
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from .models import Recipe, Ingredient, Category, Course, Cuisine, Cut, Diet, Quantity, RecipeStep
from imagekit.admin import AdminThumbnail


# Admin Panel - Import Feature
class RecipeResource(resources.ModelResource):

    class Meta:
        model = Recipe


# Admin Panel - Recipes API
class RecipeAdmin(ImportExportModelAdmin):
    list_display = ('id', 'admin_thumbnail', 'title',
                    'description', 'total_time')
    list_display_links = ['title']
    readonly_fields = ['admin_thumbnail']
    formfield_overrides = {
        models.ManyToManyField: {'widget': forms.CheckboxSelectMultiple}
    }
    admin_thumbnail = AdminThumbnail(image_field='thumbnail')
    form = RecipeModelForm
    resource_class = RecipeResource


# Import Ingredients
class IngredientResource(resources.ModelResource):

    class Meta:
        model = Ingredient


# Admin Panel - Ingredients
class IngredientAdmin(ImportExportModelAdmin):
    list_display = ('id', 'name')
    ordering = ['name']


# Import Categories
class CategoryResource(resources.ModelResource):

    class Meta:
        model = Category


# Admin Panel - Categories
class CategoryAdmin(ImportExportModelAdmin):
    list_display = ('id', 'name')
    ordering = ['name']


# Import Course
class CourseResource(resources.ModelResource):

    class Meta:
        model = Course


# Admin Panel - Course
class CourseAdmin(ImportExportModelAdmin):
    list_display = ('id', 'name')


# Import Cuisine
class CuisineResource(resources.ModelResource):

    class Meta:
        model = Cuisine


# Admin Panel - Cuisine
class CuisineAdmin(ImportExportModelAdmin):
    list_display = ('id', 'name')
    ordering = ['name']


# Immport Cut
class CutResource(resources.ModelResource):

    class Meta:
        model = Cut


# Admin Panel - Cut
class CutAdmin(ImportExportModelAdmin):
    list_display = ('id', 'name')
    ordering = ['name']


# Import Diet
class DietResource(resources.ModelResource):

    class Meta:
        model = Diet


# Admin Panel - Diet
class DietAdmin(ImportExportModelAdmin):
    list_display = ('id', 'name')
    ordering = ['name']


# Import Recipe Step
class RecipeStepResource(resources.ModelResource):

    class Meta:
        model = RecipeStep


# Admin Panel - Recipe Step
class RecipeStepAdmin(ImportExportModelAdmin):
    list_display = ('id', 'step_number', 'step_description')


# Import Quantity
class QuantityResource(resources.ModelResource):

    class Meta:
        model = Quantity


# Admin Panel - Quantity
class QuantityAdmin(ImportExportModelAdmin):
    list_display = ('id', 'name')


# Import integration
admin.site.register(Recipe, RecipeAdmin)
admin.site.register(Ingredient, IngredientAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Course, CourseAdmin)
admin.site.register(Cuisine, CuisineAdmin)
admin.site.register(Cut, CutAdmin)
admin.site.register(Diet, DietAdmin)
admin.site.register(RecipeStep, RecipeStepAdmin)
admin.site.register(Quantity, QuantityAdmin)
