from django.shortcuts import render
from projects.models import Projects as Projectss
# Create your views here.


def index(request):
    projects = Projectss.objects.all().order_by('date').filter(is_published=True)
    data = {
        'projects': projects
    }
    return render(request, 'pages/index.html', data)
