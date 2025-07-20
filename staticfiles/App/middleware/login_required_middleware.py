from django.shortcuts import redirect
from django.urls import resolve

EXEMPT_URLS = ['Login', 'Signup']  # These are your view names

class LoginRequiredMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        url_name = resolve(request.path_info).url_name

        if not request.user.is_authenticated and url_name not in EXEMPT_URLS:
            return redirect('Login')  # redirect to login if not authenticated

        return self.get_response(request)
