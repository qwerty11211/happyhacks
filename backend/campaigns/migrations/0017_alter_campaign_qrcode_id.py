# Generated by Django 3.2.8 on 2022-06-23 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campaigns', '0016_alter_campaign_qrcode_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaign',
            name='qrcode_id',
            field=models.CharField(default='c3c61c37-2917-4f59-8b65-e56aa41dfddd', max_length=300),
        ),
    ]