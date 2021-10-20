from django.urls import path
from . import  views

urlpatterns=[   
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile/', views.getUserProfile, name='getUserProfile'),
    path('users/register/', views.registerUser, name='registerUsers'),
    path('users/', views.getUsers, name='getUsers'),
    
    path('products/',views.getProducts,name="getProducts"),
    path('products/<str:pk>',views.getProduct,name="getProduct")
]