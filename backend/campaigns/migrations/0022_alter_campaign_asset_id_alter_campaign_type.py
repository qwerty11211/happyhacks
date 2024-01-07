# Generated by Django 4.1.7 on 2023-09-14 08:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campaigns', '0021_campaign_asset_id_campaign_is_verified_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaign',
            name='asset_id',
            field=models.CharField(default=0, max_length=500),
        ),
        migrations.AlterField(
            model_name='campaign',
            name='type',
            field=models.CharField(choices=[('nopoverty', 'No poverty'), ('qualityeducation', 'Quality education'), ('genderequality', 'Gender equality'), ('clean', 'Clean water/energy/food'), ('climate', 'Climate action'), ('sustainable', 'Sustainable cities and communities')], default='nopoverty', max_length=25),
        ),
    ]
