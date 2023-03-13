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
   
### Screenshot

![chatbot-og](https://user-images.githubusercontent.com/90775147/210397700-5ab9e00d-a61b-4bc9-a34a-b5bd4454b084.png)

Another example for html in chat, and Refresh chat button
```py
import streamlit as st
from streamlit_chat import message

def on_input_change():
    user_input = st.session_state.user_input
    st.session_state.past.append(user_input)
    st.session_state.generated.append("The messages from Bot\nWith new line")

def on_btn_click():
    del st.session_state.past[:]
    del st.session_state.generated[:]

audio_path = "https://docs.google.com/uc?export=open&id=16QSvoLWNxeqco_Wb2JvzaReSAw5ow6Cl"
img_path = "https://www.groundzeroweb.com/wp-content/uploads/2017/05/Funny-Cat-Memes-11.jpg"
youtube_embed = '''
<iframe width="560" height="315" src="https://www.youtube.com/embed/LMQ5Gauy17k" title="YouTube video player" frameborder="0" allow="accelerometer; encrypted-media;"></iframe>
'''

st.session_state.setdefault(
    'past', 
    ['play the song "Dancing Vegetables"', 
     'show me image of cat', 
     'and video of it']
)
st.session_state.setdefault(
    'generated', 
    [f'<audio controls src="{audio_path}"></audio>', 
     f'<img width="100%" height="200" src="{img_path}"/>', 
     f'{youtube_embed}']
)

st.title("Chat placeholder")

chat_placeholder = st.empty()

with chat_placeholder.container():
    for i in range(len(st.session_state['generated'])):                
        message(st.session_state['past'][i], is_user=True, key=f"{i}_user")
        message(st.session_state['generated'][i], key=f"{i}")
    
    st.button("Clear message", on_click=on_btn_click)

with st.container():
    st.text_input("User Input:", on_change=on_input_change, key="user_input")
```

### Screenshot

![chatbot-html-sp](https://user-images.githubusercontent.com/27276267/224219848-9a9df319-fa9d-44ef-9cd0-3b3808fa3799.png)

