"""
Definition of views.
"""

from datetime import datetime, timedelta
from django.shortcuts import render
from django.http import HttpRequest
from django.http import HttpResponse
from django import forms
from django.urls import reverse
from django.http import HttpResponseRedirect
from .models import Flight, Airport, Passenger
from django.contrib.auth.views import LoginView   





         
def flights(request):
    return render(request, 
                  "app/flights.html", {
        "flights": Flight.objects.all()
    })


def adri(request):
    return render(request, 
                  "app/adri.html", {
        "asd": "SZERETLEK BABA"
    })

def tesomsz(request):
    return render(request, 
                  "app/tesomsz.html", {
        "asd": "MARKEZZON + PETYA"
    })




def flight(request, flight_id):
    flight = Flight.objects.get(id=flight_id)
    passengers = flight.passengers.all()
    non_passengers = Passenger.objects.exclude(flights=flight).all()
    return render(request, "app/flight.html", {
        "flight": flight,
        "passengers": passengers,
        "non_passengers": non_passengers
    })



    
def book(request, flight_id):

    # For a post request, add a new flight
    if request.method == "POST":

        # Accessing the flight
        flight = Flight.objects.get(pk=flight_id)

        # Finding the passenger id from the submitted form data
        passenger_id = int(request.POST["passenger"])

        # Finding the passenger based on the id
        passenger = Passenger.objects.get(pk=passenger_id)

        # Add passenger to the flight
        passenger.flights.add(flight)

        # Redirect user to flight page
        return HttpResponseRedirect(reverse("flight", args=(flight.id,)))

        

class CommentForm(forms.Form):
    name = forms.CharField(label='Your name')

class ChoiceForm(forms.Form):
    passenger = forms.ChoiceField(label = 'Passengers')
   
 
 

def add(request):

    # Check if method is POST
    if request.method == "POST":

        # Take in the data the user submitted and save it as form
        form = CommentForm(request.POST)

        # Check if form data is valid (server-side)
        if form.is_valid():

            # Isolate the task from the 'cleaned' version of form data
            task = form.cleaned_data["name"]

            # Add the new task to our list of tasks
            request.session["tasks"] += [task]
           

            # Redirect user to list of tasks
            return HttpResponseRedirect(reverse('newyear'))

        else:

            # If the form is invalid, re-render the page with existing information.
            return render(request, "app/add.html", {
                "form": form
            })

    return render(request,
                 "app/add.html", 
                 {
        "form": CommentForm()
    })



def brian(request):
    return HttpResponse("Hello, Brian!")

from django.contrib.auth import authenticate, login, logout

def login_view2(request):
    if request.method == "POST":
        # Accessing username and password from form data
        username = request.POST["username"]
        password = request.POST["password"]

        # Check if username and password are correct, returning User object if so
        user = authenticate(request, username=username, password=password)

        # If user object is returned, log in and route to index page:
        if user:
            login(request, user)
            return HttpResponseRedirect(reverse("home"))
        # Otherwise, return login page again with new context
        else:
            return render(request, "app/login2.html", {
                "message": "Invalid Credentials"
            })
    return render(request, "app/login2.html")

def logout_view2(request):
    logout(request)
    return render(request, "app/login2.html", {
                "message": "Logged Out"
            })

def newyear(request):
    assert isinstance(request, HttpRequest)
    now = datetime.now()
   
    return render(
        request,
       "app/newyear.html",
      {
        "boolean": now.month == 1 and now.day == 1,
        "tasks": request.session["tasks"]
    })

def greet(request, name):
      
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/greet.html',
        {
            'name':name.capitalize
           
        }
    )

def proba(request):
      
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/proba.html'
       
    )

def currency(request):
      
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/currency.html'
       
    )
def crypto(request):
      
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/crypto.html'
       
    )

def betting(request):
      
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/betting.html'
       
    )
def nba(request):
      
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/nba.html'
       
    )
def translate(request):
      
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/translate.html'
       
    )
def chess(request):
      
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/chess.html'
       
    )
def home(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)

    if request.user.is_authenticated:
        loggedin = 'true'
    else:
        loggedin = 'false'

    if "tasks" not in request.session:

        # If not, create a new list
        request.session["tasks"] = []
    return render(
        request,
        'app/index.html',
        {
            'title':'Home Page',
            'year':datetime.now().year,
            'loggedin': loggedin
             
        }
    )

def contact(request):
    """Renders the contact page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/contact.html',
        {
            'title':'Contact',
            'message':'Your contact page.',
            'year':datetime.now().year,
        }
    )

def about(request):
    """Renders the about page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/about.html',
        {
            'title':'About',
            'message':'Your application description page.',
            'year':datetime.now().year,
        }
    )

def logout(request):
    """Renders the about page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/loggedoff.html',
        {
            
            'message':'You are done, Sir!',
           
        }
    )



