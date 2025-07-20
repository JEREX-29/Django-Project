from django.shortcuts import render , HttpResponse , redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate , login , logout
from django.contrib.auth.decorators import login_required
from .models import SuggestionData , RegistrationData , Review
from django.contrib import messages 
from .forms import ReviewForm


# Create your views here.

######### HOME #########
@login_required(login_url='Login')
def HomeView(request):
    return render(request,'home.html')

######### SIGN UP #########

def SignupView(request):
    if request.method == 'POST':
        uname = request.POST.get('username')
        email = request.POST.get('email')
        pass1 = request.POST.get('password1')
        pass2 = request.POST.get('password2')

        if pass1 != pass2:
            return HttpResponse("Your Password and confirm Password are not same !!")

        if User.objects.filter(username=uname).exists():
            return HttpResponse("Username already exists")

        # Create non-staff, non-superuser
        my_user = User.objects.create_user(username=uname, email=email, password=pass1)
        my_user.is_staff = False
        my_user.is_superuser = False
        my_user.save()

        return redirect('Login')

    return render(request, 'Signup.html')

######### LOG IN #########

def LoginView(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        pass1 = request.POST.get('pass')

        user = authenticate(request, username=username, password=pass1)

        if user is not None:
            login(request, user)
            request.session['login_success'] = True
            return redirect('Login')  # Redirect to reload page and trigger alert
        else:
            request.session['login_error'] = True
            return redirect('Login')  # Show error via alert

    # Get and remove session messages
    login_success = request.session.pop('login_success', False)
    login_error = request.session.pop('login_error', False)

    return render(request, 'Login.html', {
        'login_success': login_success,
        'login_error': login_error
    })

######### LOG OUT #########
def LogoutPage(request):
    logout(request)
    return redirect('Login')

######### ABOUT US #########
@login_required(login_url='Login')
def AboutView(request):
    latest_review = Review.objects.order_by('-submitted_at').first()
    top_reviews = Review.objects.order_by('-submitted_at')[1:4]
    return render(request,'About.html',{'latest_review': latest_review ,'top_reviews': top_reviews})

######### AI TECHNOLOGY #########
@login_required(login_url='Login')
def AIView(request):
    return render(request,'AI.html')

######### CONTACT US #########
@login_required(login_url='Login')
def ContactView(request):
    return render(request,'Contact.html')

######### INNOVATIVE DESIGN #########
@login_required(login_url='Login')
def InnovativeView(request):
    return render(request,'Innovative.html')

######### SUGGESTION FORM #########
@login_required(login_url='Login')
def SuggestionView(request):

    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        data = SuggestionData(name=name, email=email, message=message)
        data.save()

        request.session['suggestion_success'] = True
        return redirect('Suggestion')  # Reload the same page to show alert

    # Pop session to show once
    suggestion_success = request.session.pop('suggestion_success', False)

    return render(request, 'Suggestion.html', {
        'suggestion_success': suggestion_success
    })

######### REGISTRATION FORM #########
@login_required(login_url='Login')
def RegistrationView(request):
    
    if request.method == "POST":
        
        firstName = request.POST.get('firstName')
        lastName = request.POST.get('lastName')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        password = request.POST.get('password')
        confirmPassword = request.POST.get('confirmPassword')
        dob = request.POST.get('dob')
        country = request.POST.get('country')
        address = request.POST.get('address')
        terms = request.POST.get('terms') == 'on'

        # Validation
        if RegistrationData.objects.filter(email=email).exists(): 
            messages.error(request, '⚠️ This email is already registered.')
            return redirect('Registration')

        if password != confirmPassword:
            messages.error(request, '❌ Passwords do not match.')
            return redirect('Registration')

        # Save to DB
        Rdata = RegistrationData(
            firstName=firstName,
            lastName=lastName,
            email=email,
            phone=phone,
            password=password,
            confirmPassword=confirmPassword,
            dob=dob,
            country=country,
            address=address,
            terms=terms
        )
        Rdata.save()

        messages.success(request, '✅ Registration successful!')
        return redirect('Registration')  # Make sure URL name is correct

    return render(request, 'Registration.html')

######### SUSTAINABLE DESIGN #########
@login_required(login_url='Login')
def SustainableView(request):
    return render(request,'Sustainable.html')

######### 404 ERROR #########
@login_required(login_url='Login')
def ErrorView(request):
    return render(request,'Error.html')

######### REVIEWS PAGE #########
@login_required(login_url='Login')
def review_page(request):
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('Home')  # Redirect to avoid resubmission
    else:
        form = ReviewForm()
    return render(request, 'Reviews.html', {'form': form})


######### ELECTRIC WONDERS PAGE #########
@login_required(login_url='Login')
def ElectricView(request):
    return render(request,'Electric.html')

######### LUXRY INNOVATION PAGE #########
@login_required(login_url='Login')
def LuxuryView(request):
    return render(request,'Luxury.html')

def custom_404(request, exception):
    return render(request, '404.html', status=404)

def custom_403(request, exception):
    return render(request, '403.html', status=403)

def custom_500(request):
    return render(request, '500.html', status=500)