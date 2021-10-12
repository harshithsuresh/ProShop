from django.urls import path
from base.views.user_views import MyTokenObtainPairView,getUserProfile,registerUser,getUsers

urlpatterns=[   
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', getUserProfile, name='getUserProfile'),
    path('register/', registerUser, name='registerUsers'),
    path('', getUsers, name='getUsers'),
]