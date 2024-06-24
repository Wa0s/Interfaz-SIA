from django.db import models
from django.utils import timezone
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    UserManager
)

class CustomUserManager(UserManager):
    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("Debes tener un correo electronico")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_user(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self._create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    email = models.CharField(max_length=100, unique=True)
    foto = models.ImageField(default="avatar.png")
    date_joined = models.DateTimeField(default=timezone.now)
    # codigo_grupo = models.ForeignKey(Grupo, on_delete=models.CASCADE)
    is_staff = models.BooleanField(default=True)
    objects = CustomUserManager()
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='user_groups', 
        blank=True
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='user_permissions',
        blank=True
    )
    
    def __str__(self):
        return self.nombre or self.email

    class Meta:
        ordering = ["-date_joined"]

class Ponente(AbstractBaseUser, PermissionsMixin):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    USERNAME_FIELD = "email"

    # codigo_grupo = models.ForeignKey(Grupo, on_delete=models.CASCADE)
    @property
    def email(self):
        return self.user.email 
    @property
    def nombre(self):
        return self.user.nombre 


class Participante(AbstractBaseUser, PermissionsMixin):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    codigo = models.CharField(max_length=100, unique=True)
    
    USERNAME_FIELD = "email"
    # codigo_grupo = models.ForeignKey(Grupo, on_delete=models.CASCADE)
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='users_participante_groups',  
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='users_participante_permissions',  
        blank=True
    )
    @property
    def email(self):
        return self.user.email 
    @property
    def nombre(self):
        return self.user.nombre 


# class Participante(AbstractBaseUser, PermissionsMixin):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     codigo = models.CharField(max_length=100, unique=True)
    
#     USERNAME_FIELD = "email"
#     # codigo_grupo = models.ForeignKey(Grupo, on_delete=models.CASCADE)
#     groups = models.ManyToManyField(
#         'auth.Group',
#         related_name='users_participante_groups',  
#         blank=True
#     )
#     user_permissions = models.ManyToManyField(
#         'auth.Permission',
#         related_name='users_participante_permissions',  
#         blank=True
#     )
#     @property
#     def email(self):
#         return self.user.email 
#     @property
#     def nombre(self):
#         return self.user.nombre 