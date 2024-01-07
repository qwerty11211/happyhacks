
import json
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from drf_yasg.utils import swagger_auto_schema
from .models import Campaign
from . import serializers
User = get_user_model()


class CampaignView(generics.GenericAPIView):
    serializer_class = serializers.CampaignSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request):
        campaigns = Campaign.objects.all().order_by('-likes')

        serializer = self.serializer_class(instance=campaigns, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        data = request.data
        print("data, ", data)
        serializer = self.serializer_class(data=data)
        is_valid = serializer.is_valid()
        print("is_valid",is_valid)
        if is_valid:
            serializer.save(organiser_id=request.user.id, asset_id='12')
            print("Data saved successfully")
        else:
            print("Data is not valid:", serializer.errors)
        print(f"\n111 The post data is {serializer.data}")
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)

class CampaignIdView(generics.GenericAPIView):
    serializer_class = serializers.CampaignSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, campaign_id):
        campaign = get_object_or_404(Campaign, pk=campaign_id)
  
        serializer = self.serializer_class(instance=campaign)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def put(self, request, campaign_id):

        campaign = get_object_or_404(Campaign, pk=campaign_id)

        serializer = self.serializer_class(
            instance=campaign, data=request.data)

        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(data=serializer.data, status=status.HTTP_200_OK)

        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, campaign_id):

        campaign = get_object_or_404(Campaign, id=campaign_id)

        campaign.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


class UserCampaignsView(generics.GenericAPIView):
    serializer_class = serializers.CampaignSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, user_id):

        campaigns = Campaign.objects.all().filter(organiser_id=user_id)

        serializer = self.serializer_class(instance=campaigns, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserCampaignDetailView(generics.GenericAPIView):
    serializer_class = serializers.CampaignSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, user_id, campaign_id):
        user = User.objects.get(pk=user_id)

        campaign = Campaign.objects.all().filter(
            organiser_id=user).filter(pk=campaign_id)

        serializer = self.serializer_class(instance=campaign)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


