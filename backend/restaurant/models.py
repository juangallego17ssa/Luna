from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


def restaurant_directory_path(instance, filename):
    return f"restaurants/{instance.id}/{filename}"


class Restaurant(models.Model):
    CATEGORIES = [
        (1, 'Asian'),
        (2, 'Burgers'),
        (3, 'Chinese'),
        (4, 'Greek'),
        (5, 'Healthy'),
        (6, 'Italian'),
        (7, 'Mexican'),
        (8, 'Pizza'),
        (9, 'Poke'),
        (10, 'Sandwich'),
        (11, 'Sushi'),
        (12, 'Spanish'),
        (13, 'Vegan'),
    ]

    COUNTRIES = [
        ('AT', 'Austria'),
        ('CH', 'Switzerland'),
        ('DE', 'Germany'),
    ]

    PRICE_RANGES = [
        (1, '$',),
        (2, '$$'),
        (3, '$$$'),
        (4, '$$$$'),
    ]

    # id
    name = models.CharField(max_length=50, unique=True)
    category = models.IntegerField(choices=CATEGORIES)
    country = models.CharField(choices=COUNTRIES, max_length=50)
    street = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    zip = models.CharField(max_length=50, null=True, blank=True)
    website = models.CharField(max_length=50, null=True, blank=True)
    phone = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, null=True, blank=True)
    opening_hours = models.CharField(max_length=50)
    price_level = models.IntegerField(choices=PRICE_RANGES, null=True, blank=True)
    image = models.ImageField(upload_to=restaurant_directory_path, null=True, blank=True)
    user = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name="restaurants_created")

    def __str__(self):
        return f'{self.id} - Restaurant {self.name}'
