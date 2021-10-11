from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Product

import time

from .serializer import ProductSerializer

def getRoute(request):
    return Response("hello")

@api_view(['GET'])
def getProducts(request):
    time.sleep(1)
    products=Product.objects.all()
    serializer=ProductSerializer(products,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):
    time.sleep(1)
    product=Product.objects.get(_id=pk)
    serializer=ProductSerializer(product)
    return Response(serializer.data)