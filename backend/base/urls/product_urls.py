from django.urls import path
from base.views.product_views import getProducts,getProduct

urlpatterns=[   
    path('',getProducts,name="getProducts"),
    path('<str:pk>/',getProduct,name="getProduct")
]