from django.urls import path
from todos import views

urlpatterns = [
    path('todo/', views.TodoList.as_view()),
]