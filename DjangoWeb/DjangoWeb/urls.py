"""
Definition of urls for DjangoWeb.
"""

from datetime import datetime
from django.urls import path, include
from django.contrib import admin
from django.contrib.auth.views import LoginView, LogoutView
from app import forms, views



urlpatterns = [
    path('', views.home, name='home'),
    path('contact/', views.contact, name='contact'),
    path('about/', views.about, name='about'),
    path('greet/', views.greet, name='greet'),
    path('login/',
         LoginView.as_view
         (
             template_name='app/login.html',
             authentication_form=forms.BootstrapAuthenticationForm,
             extra_context=
             {
                 'title': 'Log in',
                 'year' : datetime.now().year,
             }
         ),
         name='login'),
    path('logout/', LogoutView.as_view(
        template_name = 'app/loggedoff.html',
        extra_context =
        {
            'message': "Goodbye bro"
            }
        
        
        ), name='logout'),
    path("add/", views.add, name="add"),
    path("tesomsz/", views.tesomsz, name="tesomsz"),
    path('hello/', include("app.urls")),
    path('newyear/', include("app.urls")),
    path('flights/', views.flights, name="flights"),
    path('currency/', views.currency, name="currency"),
    path('nba/', views.nba, name="nba"),
    path('translate/', views.translate, name="translate"),
    path('chess/', views.chess, name="chess"),
    path('crypto/', views.crypto, name="crypto"),
    path('betting/', views.betting, name="betting"),
    path('proba/', views.proba, name="proba"),
    path("<int:flight_id>", views.flight, name="flight"),
    path("<int:flight_id>/book", views.book, name="book"),
    path('adri/', views.adri, name="adri"),
    path('admin/', admin.site.urls),
]
