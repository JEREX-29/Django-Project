from django.contrib import admin
from .models import SuggestionData , RegistrationData , Review

# Register your models here.

admin.site.register(SuggestionData)
admin.site.register(RegistrationData)
admin.site.register(Review)