from django.db import models


# Create your models here.


class Campaign(models.Model):

    STATUS = (
        ('Pending', 'Pending'),
        ('In_Transit', 'In_Transit'),
        ('delivered', 'delivered')
    )

    TYPE = options = [
    ('nopoverty', 'No poverty'),
    ('qualityeducation', 'Quality education'),
    ('genderequality', 'Gender equality'),
    ('clean', 'Clean water/energy/food'),
    ('climate', 'Climate action'),
    ('sustainable', 'Sustainable cities and communities'),
]


    name = models.CharField(max_length=100)
    images = models.CharField(max_length=300)
    description = models.CharField(max_length=1000)
    type = models.CharField(
        max_length=25, choices=TYPE, default=TYPE[0][0])
    status = models.CharField(
        max_length=25, choices=STATUS, default=STATUS[0][0])

    start_at = models.DateTimeField(auto_now=True)
    end_date = models.DateTimeField()
    current_amount = models.IntegerField(default=0)
    target_amount = models.IntegerField()
    likes = models.IntegerField(default=0)
    contact_info = models.CharField(max_length=300)
    organiser_id = models.IntegerField()
    verification_documents = models.CharField(max_length=200, default='')


    def __str__(self):
        return f"{self.name}"
