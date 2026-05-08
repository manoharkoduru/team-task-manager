from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from tasks.models import Task
from django.utils.timezone import now

class DashboardView(APIView):

    def get(self, request):
        tasks = Task.objects.all()

        data = {
            "total_tasks": tasks.count(),
            "todo_tasks": tasks.filter(status="TODO").count(),
            "in_progress_tasks": tasks.filter(status="IN_PROGRESS").count(),
            "done_tasks": tasks.filter(status="DONE").count(),
            "overdue_tasks": tasks.filter(
                due_date__lt=now().date()
            ).exclude(status="DONE").count()
        }

        return Response(data)