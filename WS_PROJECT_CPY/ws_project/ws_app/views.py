from django.shortcuts import render
from pathlib import Path
import json
from django.http import JsonResponse

def set_var(request):
    BASE_DIR = Path(__file__).resolve().parent.parent
    with open(BASE_DIR / "config.json") as f:
        CONFIG = json.load(f)
        print(type(JsonResponse(CONFIG)))
        return JsonResponse(CONFIG)