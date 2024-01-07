from django.urls import path
from . import views

urlpatterns = [
    path('', views.CampaignView.as_view(), name='campaigns'),
    path('<int:campaign_id>/', views.CampaignIdView.as_view(), name='campaign'),
     path('user/<int:user_id>/campaigns',
         views.UserCampaignsView.as_view(), name='users_campaign'),
    path('user/<int:user_id>/campaign/<int:campaign_id>/',
         views.UserCampaignDetailView.as_view(), name='user_campaign_detail'),
]
