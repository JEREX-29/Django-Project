"""
URL configuration for Project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from App.views import *
from App import views
from django.conf.urls import handler404, handler403, handler500

urlpatterns = [
    
    path('admin',include('admin_honeypot.urls',namespace='admin_honeypot')),
    path('theboss/', admin.site.urls),
    path('home/',views.HomeView,name="Home"),
    path('about/',views.AboutView,name="About"),
    path('ai/',views.AIView,name="Ai"),
    path('contact/',views.ContactView,name="Contact"),
    path('innovative/',views.InnovativeView,name="Innovative"),
    path('registration/', RegistrationView, name='Registration'),
    path('suggestion/',views.SuggestionView,name="Suggestion"),
    path('sustainable/',views.SustainableView,name="Sustainable"),
    path('error/',views.ErrorView,name="Error"),
    path('review/', views.review_page, name='review_page'),
    path('electric/',views.ElectricView,name="Electric"),
    path('luxury/',views.LuxuryView,name="Luxury"),

    path('', views.LoginView, name='Login'),
    path('login/',views.LoginView,name="Login"),
    path('signup/',views.SignupView,name="Signup"),
    path('logout/',views.LogoutPage,name="logout"),
    
]

handler404 = 'App.views.custom_404'
handler403 = 'App.views.custom_403'
handler500 = 'App.views.custom_500'

if settings.DEBUG:

    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)