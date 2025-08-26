from django.urls import path,include
from .views import set_var

urlpatterns = [
    path('variables/',set_var,name='variables')
]
