<!-- # Welcome to MkDocs

For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files. -->
# Welcome to Streamlit Chat [st-chat]

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
   
## Screenshot

![chatbot-og](https://user-images.githubusercontent.com/90775147/210397700-5ab9e00d-a61b-4bc9-a34a-b5bd4454b084.png)
