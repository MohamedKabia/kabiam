from django.contrib import admin
from .models import Messages
# Register your models here.

class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'date_sent')
    list_display_links = ('name', 'email')
    search_fields = ('name', 'email', 'date_sent')
    list_per_page = 25


admin.site.register(Messages, ContactAdmin)