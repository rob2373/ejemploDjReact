from django.db import models

# Create your models here.
class Tasks(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    numU = models.IntegerField(null=True, default=0)
    numD = models.IntegerField(null=True, default=0)
    resul = models.DecimalField(decimal_places=3, max_digits=10, blank=True ,default=0, null=True)
    
    def save(self, *args, **kwargs):
        if self.numU == None:
            self.numU=0
        if self.numD == None:
            self.numD=0
        self.resul = self.numU + self.numD
        super().save(*args, **kwargs)
            
    def __str__(self) :
        return self.title
    
