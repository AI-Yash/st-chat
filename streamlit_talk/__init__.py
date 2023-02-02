import os
from typing import Literal, Optional, Union

import streamlit.components.v1 as components

_RELEASE = True
COMPONENT_NAME = "streamlit_talk"

if _RELEASE:  # use the build instead of development if release is true
    root_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(root_dir, "frontend/build")

    _streamlit_talk = components.declare_component(COMPONENT_NAME, path=build_dir)
else:
    _streamlit_talk = components.declare_component(
        COMPONENT_NAME, url="http://localhost:3000"
    )

# data type for avatar style
AvatarStyle = Literal[
    "adventurer",
    "adventurer-neutral",
    "avataaars",
    "big-ears",
    "big-ears-neutral",
    "big-smile",
    "bottts",
    "croodles",
    "croodles-neutral",
    "female",
    "gridy",
    "human",
    "identicon",
    "initials",
    "jdenticon",
    "male",
    "micah",
    "miniavs",
    "pixel-art",
    "pixel-art-neutral",
    "personas",
]


def message(
    complete_text: str,
    initial_text: str = "",
    is_user: Optional[bool] = False,
    avatar_style: Optional[AvatarStyle] = None,
    seed: Optional[Union[int, str]] = 42,
    key: Optional[str] = None,
    use_typewriter: bool = False,
):
    """
    Creates a new instance of streamlit-chat component

    Parameters
    ----------
    message: str
        The message to be displayed in the component
    is_user: bool
        if the sender of the message is user, if `True` will align the
        message to right, default is False.
    avatar_style: Literal or None
        The style for the avatar of the sender of message, default is bottts
        for not user, and pixel-art-neutral for user.
        st-chat uses https://avatars.dicebear.com/styles for the avatar
    seed: int or str
        The seed for choosing the avatar to be used, default is 42.
    key: str or None
        An optional key that uniquely identifies this component. If this is
        None, and the component's arguments are changed, the component will
        be re-mounted in the Streamlit frontend and lose its current state.

    Returns: None
    """
    if not avatar_style:
        avatar_style = "pixel-art-neutral" if is_user else "bottts"

    _streamlit_talk(
        complete_text=complete_text, initial_text=initial_text, seed=seed, isUser=is_user, avatarStyle=avatar_style, key=key,
        useTypewriter=use_typewriter
    )


if not _RELEASE:
    import streamlit as st

    chatlog_placeholder = st.empty()
    user_input_placeholder = st.empty()
    persona_selection_placeholder = st.empty()

    # testing
    long_message = """A chatbot or chatterbot is a software application used to conduct an on-line chat conversation via text or text-to-speech, in lieu of providing direct contact with a live human agent.\n\nDesigned to convincingly simulate the way a human would behave as a conversational partner, chatbot systems typically require continuous tuning and testing, and many in production remain unable to adequately converse, while none of them can pass the standard Turing test. The term "ChatterBot" was originally coined by Michael Mauldin (creator of the first Verbot) in 1994 to describe these conversational programs.
    """
    user_avatar = "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f464.png"
    bot_avatar = "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f1ec-1f1f7.png"
    with open("styles.css") as f:
        st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

    with chatlog_placeholder.container():
        message(initial_text="Hello, I am a Chatbot,", complete_text="Hello, I am a Chatbot, how may I help you?", use_typewriter=True)
        message("Hey, what's a chatbot?", is_user=True, avatar_style=user_avatar)
        message(long_message, avatar_style=bot_avatar)
        for i in range(10):
            if i % 2 == 0:
                message(f"{i}", is_user=True, avatar_style=user_avatar)
            else:
                message(f"bot {i}", is_user=False, avatar_style=bot_avatar)

    with user_input_placeholder.container():
        st.text_input("Message:")
