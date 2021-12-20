import streamlit.components.v1 as components

_RELEASE = False

if _RELEASE:
    pass
else:
    _streamlit_chat = components.declare_component(
        "Streamlit-Chat",
        url="http://localhost:3001"
    )

_streamlit_chat()
