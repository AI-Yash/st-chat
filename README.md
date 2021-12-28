# st-chat

Streamlit Component, for a Chat-bot UI, [example app](https://share.streamlit.io/ai-yash/st-chat/main/examples/chatbot.py)

authors - [@yashppawar](https://github.com/yashppawar) & [@YashVardhan-AI](https://github.com/yashvardhan-ai)

## Installation

Install `streamlit-chat` with pip
```bash
pip install streamlit-chat 
```

usage, import the `message` function from `streamlit_chat`
```py
import streamlit as st
from streamlit_chat import message

message("My message") 
message("Hello bot!", is_user=True)  # align's the message to the right
```
   
