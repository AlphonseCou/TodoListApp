from .models import Todo
from .serializers import TodoSerializer
from rest_framework.generics import ListAPIView


class TodoList(ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer