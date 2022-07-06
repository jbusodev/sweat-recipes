from django import forms
from django.db.models import fields
from .models import Ingredient, Recipe


class RecipeModelForm(forms.ModelForm):
    description = forms.CharField(widget=forms.Textarea)

    class Meta:
        model = Recipe
        fields = '__all__'
