import {
  // eslint-disable-next-line 
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import { ReactNode } from "react"
import styled from '@emotion/styled'
import { css } from '@emotion/react'


import './stChat.css'
import Avatar from "./avatar"
import Message from "./message"

class Chat extends StreamlitComponentBase {
  public componentDidMount() {
    let body = document.querySelector('body');
    body?.style.setProperty('--md-primary-color', '#00FF00');
  }
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
    
    // styles for the avatar image
    // const Avatar = styled.img({
    //   border: `1px solid transparent`,
    //   borderRadius: '50%',
    //   height: '3rem',
    //   width: '3rem',
    //   margin: 0
    // })
       
    // styles for the container
    const Chat = styled.div({
      display: 'flex',
      // flexDirection: 'row',
      fontFamily: `${theme.font}, 'Segoe UI', 'Roboto', sans-serif`, 
      height: 'auto',
      margin: 0,
      width: '100%'
    }, 
    (props: {isUser: boolean}) => {  // specific styles
      if (props.isUser){
        return css`
          flex-direction: row-reverse;
          & > div {
            text-align: right;
          }
        `
      }
      return css``
    })

    

    return (
      <Chat isUser={isUser}>
        <Avatar src={avatarUrl}/>
        <Message is_table={is_table} message={message} allow_html={allow_html}/>
      </Chat>
    )
  }
}

export default withStreamlitConnection(Chat);
