import setuptools

with open("README.md") as readme_file:
    readme = readme_file.read()


setuptools.setup(
    name="streamlit-talk",
    version="0.0.5",
    author="Yi Chern Tan",
    author_email="tanyichern.accs@gmail.com",
    description="A streamlit component, to make a UI for chat messages in Streamlit",
    long_description=readme,
    long_description_content_type="text/markdown",
    url="https://github.com/yichern/st-chat",
    packages=setuptools.find_packages(),
    include_package_data=True,
    classifiers=[
        "Programming Language :: Python :: 3",
        "Operating System :: OS Independent",
    ],
    keywords="chat talk streamlit streamlit-component",
    python_requires=">=3.8",
    install_requires=[
        # By definition, a Custom Component depends on Streamlit.
        # If your component has other Python dependencies, list
        # them here.
        "streamlit >= 0.63",
    ],
)
