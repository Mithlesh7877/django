from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
app_name='companies'
urlpatterns=[
    url(r'^$',views.index,name='index'),
    url(r'^users/',views.UserList.as_view()),
    url(r'^details/(?P<pk>[0-9]+)/$',views.UserDetail.as_view()),
    url(r'^create/',views.UserCreate.as_view()),
    url(r'^updates/(?P<pk>[0-9]+)/$',views.UserUpdate.as_view()),
    url(r'^delete/(?P<pk>[0-9]+)/$',views.UserDelete.as_view()),
]


urlpatterns=format_suffix_patterns(urlpatterns)