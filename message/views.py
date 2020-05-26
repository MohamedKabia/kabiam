from datetime import date
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Messages
from django.core.mail import send_mail
# Create your views here.


def contact(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']
        message = Messages(name=name, email=email, message=message)

        message.save()
        messages.success(request, 'Your message has been sent, I will get back to you soon.')
        send_mail(
            'Message received',
            'Thank you for your message. I will try to get back to you as '
            'soon as possible. You can always message me at kabiaofficial@gmail.com.',
            'kabiaofficial@gmail.com',
            [email],
            fail_silently=True,
        )

        return redirect('/')

