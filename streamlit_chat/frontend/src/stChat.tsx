import {
  // eslint-disable-next-line 
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import { ReactNode } from "react"

import './stChat.css'
import Avatar from "./avatar"
import Message from "./message"
import ChatElement from './Chat.tsx'

class Chat extends StreamlitComponentBase {
  public render = (): ReactNode => {
    Streamlit.setFrameHeight(window.innerHeight)

    // const { isUser, avatarStyle, seed, message, logo } = this.props.args;
    const { isUser, avatarStyle, seed, message, logo, allow_html, is_table } = this.props.args;
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
  
    // set CSS variables for theme
    let body = document.querySelector('body')
    body?.style.setProperty('--secondary-bg-color', theme.secondaryBackgroundColor)
    body?.style.setProperty('--bg-color', theme.backgroundColor)
    body?.style.setProperty('--primary-color', theme.primaryColor)
    body?.style.setProperty('--text-color', theme.textColor)
    body?.style.setProperty('--font', theme.font)
    

    return (
      <ChatElement isUser={isUser} avatar={!(avatarStyle === 'no-avatar')}>
        <Avatar src={avatarUrl}/>
        <Message is_table={is_table} message={message} allow_html={allow_html}/>
      </ChatElement>
    )
  }
}

export default withStreamlitConnection(Chat);
