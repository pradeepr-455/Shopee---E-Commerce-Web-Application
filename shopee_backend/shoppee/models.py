from django.db import models

# Create your models here.
from django.db import models


class Project(models.Model):

    title = models.CharField(max_length=200)

    description = models.TextField()

    technologies = models.CharField(max_length=300)

    image = models.ImageField(
        upload_to='projects/',
        blank=True,
        null=True
    )

    github_link = models.URLField(blank=True, null=True)

    live_link = models.URLField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title