import {
  // eslint-disable-next-line 
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { transform } from "typescript"
import copy from 'copy-to-clipboard';

class Chat extends StreamlitComponentBase {
  public render = (): ReactNode => {
    Streamlit.setFrameHeight(window.innerHeight)
    const { isUser, avatarStyle, seed, message, logo } = this.props.args;
    const avatarUrl = !!logo ? logo: `https://api.dicebear.com/5.x/${avatarStyle}/svg?seed=${seed}`

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
    const Avatar = styled.img({
      border: `1px solid transparent`,
      borderRadius: '50%',
      height: '3rem',
      width: '3rem',
      margin: 0
    })

    // styles for the message box
    const Message = styled.div({
      display: 'inline-block',
      background: theme.secondaryBackgroundColor,
      border: '1px solid transparent',
      borderRadius: '10px',
      padding: '10px 14px',
      margin: '5px 20px',
      // maxWidth: '70%',
      whiteSpace: 'pre-line'
    })

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

    const CopyButton = styled.button({

      fontFamily: `${theme.font}, 'Segoe UI', 'Roboto', sans-serif`,
      margin: 0,
      border: 'None',
      borderRadius: '0.75rem',
      position: 'absolute',
      top: '5px',
      right: '20px',
      verticalAlign: 'top',
      opacity:'30%',
      background: theme.secondaryBackgroundColor,
      ":hover":{opacity:'100%'}
    },
      (props: { isUser: boolean }) => {  // specific styles
        if (!props.isUser) {
          return css`
          pointer-events: auto;
          height: 2.5rem;
          padding: 0px;
          width: 2.5rem;
          border: none;
          background-color: transparent;
          color: rgba(49, 51, 63, 0.6);
          border-radius: 0.75rem;
          transform: scale(0);
      `
        }
      })


    const copytext = () => {
      copy(message)
      alert('Text copied');
    }
    const displaymessage = () => {
      return "Click to copy"
    }


    return (
      <Chat isUser={isUser}>
        <Avatar src={avatarUrl} alt="profile" draggable="false" />
        <div>
          <Message style={{textAlign:'left'}}>
            {message}
          </Message>
          <CopyButton isUser={!isUser} onClick={copytext} title="Click to copy">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          </CopyButton>
        </div>

      </Chat>
    )
  }
}

export default withStreamlitConnection(Chat);
