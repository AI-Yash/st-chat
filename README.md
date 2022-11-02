# Important note
This is a fork of [st-chat](https://github.com/AI-Yash/st-chat) that implements functionality to pass in URL links as an avatar, and adjusts some CSS properties of the Streamlit Chat component.

The fork is maintained by [@yichern](https://github.com/yichern).

Credit goes to the authors [@yashppawar](https://github.com/yashppawar) & [@YashVardhan-AI](https://github.com/yashvardhan-ai).

# st-talk

Streamlit Component, for a Chat-bot UI, [example app](https://share.streamlit.io/ai-yash/st-chat/main/examples/chatbot.py)
## Installation

Install `streamlit-talk` with pip
```bash
pip install streamlit-talk
```

usage, import the `message` function from `streamlit_talk`
```py
import streamlit as st
from streamlit_talk import message

message("My message") 
message("Hello bot!", is_user=True)  # align's the message to the right
```
   
