import streamlit.components.v1 as components
import os

_RELEASE = False

if _RELEASE:
    root_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(root_dir, "frontend/build")

    _streamlit_chat = components.declare_component(
        "Streamlit_Chat",
        path = build_dir
    )
else:
    _streamlit_chat = components.declare_component(
        "Streamlit_Chat",
        url = "http://localhost:3001"
    )


def message(message, is_user=False, key=None):
    _streamlit_chat(message=message, seed=42, is_user=is_user, key=key)

lorem_message = """
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
"""

if not _RELEASE:
    message("Hello, world!")
    message("nice", is_user=True)
    message(lorem_message)
