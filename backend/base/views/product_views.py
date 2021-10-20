from rest_framework.response import Response
from rest_framework.decorators import api_view

from base.models import Product
from base.serializer import ProductSerializer
from rest_framework import status

@api_view(['GET'])
def getProducts(request):
    try:
        products=Product.objects.all()
        serializer=ProductSerializer(products,many=True)
        return Response(serializer.data)
    except:
        messages={'detail':'Unable to load the products. Please try again later'}
        return Response(messages,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getProduct(request,pk):
    try:
        product=Product.objects.get(_id=pk)
        serializer=ProductSerializer(product)
        return Response(serializer.data)
    except:
        messages={'detail':'Product details does not exist.'}
        return Response(messages,status=status.HTTP_400_BAD_REQUEST)    
    