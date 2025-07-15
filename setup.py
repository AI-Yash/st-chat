import setuptools

with open('README.md') as readme_file:
    readme = readme_file.read()

setuptools.setup(
    name="streamlit-chat",
    version="0.1.1",
    author="Yash Pravin Pawar, Yash Vardhan Kapil",
    author_email="yashpawarp@gmail.com",
    description="A streamlit component, to make chatbots",
    long_description=readme,
    long_description_content_type="text/markdown",
    url="https://github.com/AI-Yash/st-chat",
    packages=setuptools.find_packages(),
    include_package_data=True,
    classifiers=[
        "Programming Language :: Python :: 3",
        "Operating System :: OS Independent",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: 3.12",
    ],
    keywords="chat streamlit streamlit-component",
    python_requires=">=3.6",
    install_requires=[
        # By definition, a Custom Component depends on Streamlit.
        # If your component has other Python dependencies, list
        # them here.
        "streamlit >= 0.63",
    ],
)
