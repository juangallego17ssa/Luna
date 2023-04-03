from django.db import models
from django.contrib.auth import get_user_model
from review.models import Review

User = get_user_model()


class Comment(models.Model):
    # id
    text_content = models.CharField(max_length=1000)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name="comments_created")
    review = models.ForeignKey(to=Review, on_delete=models.PROTECT, related_name="comments")
    likes = models.ManyToManyField(to=User, related_name="comments_liked")

    def __str__(self):
        return f'{self.id} - Comment {self.text_content}'
