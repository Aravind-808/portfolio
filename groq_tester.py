import os
from groq import Groq

client = Groq(
    api_key = 'api key'
)


imp = input()
chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": "what you want the bot to answer like"
        },
        {
            "role": "user",
            "content": imp,
        }
    ],

    model="llama3-70b-8192",
    temperature=0.5,

    max_tokens=1024,
    top_p=1,

    stop=None,

    stream=False,
)

print(chat_completion.choices[0].message.content)
