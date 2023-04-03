from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


def restaurant_directory_path(instance, filename):
    return f"restaurants/{instance.id}/{filename}"


class Restaurant(models.Model):
    CATEGORIES = [
        ('Asian', 'Asian'),
        ('Burger', 'Burgers'),
        ('Chinese', 'Chinese'),
        ('Greek', 'Greek'),
        ('Healthy', 'Healthy'),
        ('Italian', 'Italian'),
        ('Mexican', 'Mexican'),
        ('Pizza', 'Pizza'),
        ('Poke', 'Poke'),
        ('Sandwich', 'Sandwich'),
        ('Sushi', 'Sushi'),
        ('Spanish', 'Spanish'),
        ('Vegan', 'Vegan'),
    ]

    COUNTRIES = [
        ('AT', 'Austria'),
        ('CH', 'Switzerland'),
        ('DE', 'Germany'),
    ]

    PRICE_RANGES = [
        ('1', '$'),
        ('2', '$$'),
        ('3', '$$$'),
        ('4', '$$$$'),
        ('5', '$$$$$'),
    ]

    # id
    name = models.CharField(max_length=50, unique=True)
    category = models.CharField(choices=CATEGORIES, max_length=50)
    country = models.CharField(choices=COUNTRIES, max_length=50)
    street = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    zip = models.CharField(max_length=50, null=True, blank=True)
    website = models.CharField(max_length=50, null=True, blank=True)
    phone = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, null=True, blank=True)
    opening_hours = models.CharField(max_length=50)
    price_level = models.CharField(choices=PRICE_RANGES, max_length=50, null=True, blank=True)
    image = models.ImageField(upload_to=restaurant_directory_path, null=True, blank=True)
    user = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name="restaurants_created")

    def __str__(self):
        return f'{self.id} - Restaurant {self.name}'
