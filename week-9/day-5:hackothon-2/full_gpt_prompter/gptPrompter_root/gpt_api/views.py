import json
from django.http import JsonResponse
import openai
from django.views.decorators.csrf import csrf_exempt
import os


# Create your views here.
@csrf_exempt
def handle_data_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user_actor = data.get('actor')
        user_task = data.get('task')
        user_format = data.get('format')
        openai.api_key = os.environ["OPENAI_API_KEY"]
        prompt = "Design a prompt for use with AI LLM systems. The 3 parameters that the " \
                 "prompt must include are actor, task, and format. The actor param is " \
                 "establishing the role of the AI - thus setting the tone for the AI's " \
                 "response. The task param establishes the action that the user would like " \
                 "for the AI to perform. Usually this action will be explaining something or " \
                 "performing analysis on some text. The format param establishes the structure " \
                 "that the user would like the AI to return it's response in. Ideally, the user will include " \
                 "examples of the format. But even if the user does not, include at least one " \
                 "example in the finished prompt. Make sure that the finished prompt is descriptive, " \
                 "clear, and is understandable to an AI system. An example of a suitable is 'You are " \
                 "a {actor}. As a {actor} you must do {actor job}. Please do {task}. And your output " \
                 "format should be in {format} format.' So, if the actor was 'lifeguard', task was 'based " \
                 "on the following data, suggest some best practices for safety in swimming pool " \
                 "environments', and format was 'plain text', the output might resemble: 'You are " \
                 "a lifeguard and water safety expert. Based on the following data, suggest " \
                 "best practices for safety in swimming pool environments, errors to avoid, and several anecdotes. " \
                 "The format should be in plain text resembling a safety manual.'. Use creativity when " \
                 "creating the prompt. It should be descriptive, visually interesting if relevant, and true." \
                 "In addition to the prompt, give an example of the response to the prompt " \
                 f"Actor: {user_actor}, user: {user_task}, and format: {user_format}. "
        response = openai.Completion.create(
            model='text-davinci-003',
            prompt=prompt,
            max_tokens=700,
            temperature=0.5,
            top_p=0.8,
        )
        generated_prompt = response.choices[0].text.strip()
        return JsonResponse({"prompt": generated_prompt})
    else:
        return JsonResponse({'error': 'Invalid request method.'})



