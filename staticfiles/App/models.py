from django.db import models

# Create your models here.

#####  Suggestion Form Model  #####

class SuggestionData(models.Model):

    name=models.CharField(max_length=50)
    email=models.CharField(max_length=20)
    message=models.TextField()

    def __str__(self):
        return self.name


#####  Registration Form Model  #####
   
class RegistrationData(models.Model):
    
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    password = models.CharField(max_length=128)
    confirmPassword = models.CharField(max_length=128)
    dob = models.DateField()
    
    COUNTRY_CHOICES = [
        ('IN', 'INDIA'),
        ('CN', 'CHINA'),
        ('KR', 'KOREA'),
        ('SRI', 'SHRILANKA'),
    ]
    country = models.CharField(max_length=3, choices=COUNTRY_CHOICES)
    
    address = models.TextField()
    terms = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.firstName} {self.lastName}"



#####  Reviews Model  #####
    
class Review(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    rating = models.IntegerField(choices=[(i, f"{i} Star{'s' if i > 1 else ''}") for i in range(1, 6)])
    comment = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.rating}★)"
