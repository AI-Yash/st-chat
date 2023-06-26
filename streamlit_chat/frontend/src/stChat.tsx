import {
  // eslint-disable-next-line 
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
  Theme
} from "streamlit-component-lib"
import { ReactNode } from "react"

import copy from 'copy-to-clipboard';

import './stChat.css'
import Avatar from "./avatar.tsx"
import Message from "./message.tsx"
import ChatElement from './Chat.tsx'
import CopyButton from './copyButton.tsx'
import ReactDOM from "react-dom";

class Chat extends StreamlitComponentBase {
  protected addCopyButtonToCode(): void {
    let code_elements = document.querySelectorAll('.msg pre');

    code_elements.forEach((element) => {
      let code = element.querySelector('code')
      if (code != null && element.querySelector('.code-copy-btn') == null){
        let copyBtnWrapper = document.createElement('div')
        copyBtnWrapper.className = 'code-copy-btn'

        ReactDOM.render(<CopyButton visible={true} onClick={() => copy(code?.innerText || ' ')}/>, copyBtnWrapper)
        console.log(copyBtnWrapper) 
        element.appendChild(copyBtnWrapper)
      }
    })
  }

  public componentDidUpdate(): void {
    Streamlit.setFrameHeight()
  }

  protected changeSizeHandler(): void {
    Streamlit.setFrameHeight()
  }

  public componentDidMount(): void {
    Streamlit.setFrameHeight()

    setTimeout(Streamlit.setFrameHeight, 1000);

    document.querySelectorAll('.msg details').forEach((element) => {
      element.addEventListener('toggle', this.changeSizeHandler)
    })

    const { copy_btn } = this.props.args;
    if (copy_btn === 'copy-code') 
      this.addCopyButtonToCode()
  }

  public componentWillUnmount(): void {
      document.querySelectorAll('.msg details').forEach(element => {
        element.removeEventListener('toggle', this.changeSizeHandler)
      })
  }

  public setColors(theme: Theme): void {
    // set CSS variables for theme
    let body = document.querySelector('body')
    body?.style.setProperty('--secondary-bg-color', theme.secondaryBackgroundColor)
    body?.style.setProperty('--bg-color', theme.backgroundColor)
    body?.style.setProperty('--primary-color', theme.primaryColor)
    body?.style.setProperty('--text-color', theme.textColor)
    body?.style.setProperty('--font', theme.font)
  }

  public render = (): ReactNode => {
    // Streamlit.setFrameHeight(window.innerHeight)

    // const { isUser, avatarStyle, seed, message, logo } = this.props.args;
    const { isUser, avatarStyle, seed, message, logo, allow_html, is_table, copy_btn} = this.props.args;
    const avatarUrl: string = !!logo ? logo: `https://api.dicebear.com/5.x/${avatarStyle}/svg?seed=${seed}`
    
    // Streamlit sends us a theme object via props that we can use to ensure
    // that our component has visuals that match the active theme in a
    // streamlit app.
    const { theme } = this.props
    // Maintain compatibility with older versions of Streamlit that don't send
    // a theme object.
    if (!theme) {
      return <div>Theme is undefined, please check streamlit version.</div>
    }
  
    this.setColors(theme)   

    return (
      <ChatElement isUser={isUser} avatar={!(avatarStyle === 'no-avatar')}>
        <Avatar src={avatarUrl}/>
        <Message is_table={is_table} message={message} allow_html={allow_html}/>
        <CopyButton onClick={() => copy(message, {debug: true})} visible={copy_btn === true}/>
      </ChatElement>
    )
  }
}

export default withStreamlitConnection(Chat);
