from streamlit_chat import message, NO_AVATAR
import streamlit as st


audio_path = "https://docs.google.com/uc?export=open&id=16QSvoLWNxeqco_Wb2JvzaReSAw5ow6Cl"
img_path = "https://www.groundzeroweb.com/wp-content/uploads/2017/05/Funny-Cat-Memes-11.jpg"
youtube_embed = '''
<iframe width="400" height="215" src="https://www.youtube.com/embed/LMQ5Gauy17k" title="YouTube video player" frameborder="0" allow="accelerometer; encrypted-media;"></iframe>
'''

markdown = """
### HTML in markdown is ~quite~ **unsafe**

<blockquote>
However, if you are in a trusted environment (you trust the markdown). You can use allow_html props to enable support for html.
</blockquote>

* Lists
* [ ] todo
* [x] done

Math:

Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following
equation.

$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$

```py
import streamlit as st
st.write("Python code block")
```

~~~js
console.log("Here is some JavaScript code")
~~~
"""

table_markdown = '''
A Table:

| Feature     | Support              |
| ----------: | :------------------- |
| CommonMark  | 100%                 |
| GFM         | 100% w/ `remark-gfm` |
'''

long_message = """A chatbot or chatterbot is a software application used to conduct an on-line chat conversation via text or text-to-speech, in lieu of providing direct contact with a live human agent. 
Designed to convincingly simulate the way a human would behave as a conversational partner, chatbot systems typically require continuous tuning and testing, and many in production remain unable to adequately converse, while none of them can pass the standard Turing test. 
The term "ChatterBot" was originally coined by Michael Mauldin (creator of the first Verbot) in 1994 to describe these conversational programs.

[streamlit website](https://streamlit.io)
"""

def on_input_change():
    user_input = st.session_state.user_input
    st.session_state.past.append(user_input)
    st.session_state.generated.append("The messages from Bot\nWith new line")

def on_btn_click():
    del st.session_state.past[:]
    del st.session_state.generated[:]

if __name__ == '__main__':
    st.session_state.setdefault(
        'past', 
        ["Hey, \nwhat's a chatbot?", 
        'plan text with line break',
        'play the song "Dancing Vegetables"', 
        'show me image of cat', 
        'and video of it',
        'show me some markdown sample',
        'table in markdown']
    )

    st.session_state.setdefault(
        'generated', 
        [{'type': 'normal', 'data': long_message}, 
        {'type': 'normal', 'data': 'Line 1 \n Line 2 \n Line 3'},
        {'type': 'normal', 'data': f'<audio controls src="{audio_path}"></audio>'}, 
        {'type': 'normal', 'data': f'<img width="100%" height="200" src="{img_path}"/>'}, 
        {'type': 'normal', 'data': f'{youtube_embed}'},
        {'type': 'normal', 'data': f'{markdown}'},
        {'type': 'table', 'data': f'{table_markdown}'}]
    )

    st.title("Chat placeholder")

    chat_placeholder = st.empty()

    with chat_placeholder.container():    
        for i in range(len(st.session_state['generated'])):                
            message(st.session_state['past'][i], is_user=True, key=f"{i}_user")
            message(
                st.session_state['generated'][i]['data'], 
                key=f"{i}", 
                allow_html=True,
                is_table=st.session_state['generated'][i]['type']=='table',
                avatar_style=NO_AVATAR
            )
        st.button("Clear message", on_click=on_btn_click)

    with st.container():
        st.text_input("User Input:", on_change=on_input_change, key="user_input")
