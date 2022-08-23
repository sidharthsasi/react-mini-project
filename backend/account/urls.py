from django.urls import path
from . import views
from rest_framework import routers
from .views import AccountViewset

router = routers.DefaultRouter()
router.register(r'account',AccountViewset,'account')

urlpatterns = router.urls
