# Generated by Django 3.2.8 on 2021-10-11 11:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_oderitem_order_review_shippingaddress'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]