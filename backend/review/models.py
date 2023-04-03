from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator
from restaurant.models import Restaurant

User = get_user_model()


class Review(models.Model):
    # id
    text_content = models.CharField(max_length=1000)
    rating = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)])
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name="reviews_created")
    restaurant = models.ForeignKey(to=Restaurant, on_delete=models.PROTECT, related_name="reviews")
    likes = models.ManyToManyField(to=User, related_name="reviews_liked")

    def __str__(self):
        return f'{self.id} - Review {self.text_content}'
