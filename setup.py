import setuptools

setuptools.setup(
    name="streamlit-chat",
    version="0.0.1.1",
    author="Yash Pravin Pawar, Yash Vardhan Kapil",
    author_email="yashpawarp@gmail.com, workid169@gmail.com",
    description="A streamlit component, to make chatbots",
    long_description="A streamlit component, to make chatbots",
    long_description_content_type="text/plain",
    url="https://github.com/AI-Yash/st-chat",
    packages=setuptools.find_packages(),
    include_package_data=True,
    classifiers=[],
    python_requires=">=3.6",
    install_requires=[
        # By definition, a Custom Component depends on Streamlit.
        # If your component has other Python dependencies, list
        # them here.
        "streamlit >= 0.63",
    ],
)
