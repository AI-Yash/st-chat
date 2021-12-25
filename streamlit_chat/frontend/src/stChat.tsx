import {
  // eslint-disable-next-line 
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import styled from '@emotion/styled'
import { css } from '@emotion/react'


const specificChatDivStyles = (props: {isUser: boolean}) => {
  if (props.isUser) {
    return css`
      flex-direction: row-reverse;
      & > div {
        text-align: right;
      }
    `
  }
  return css``
}

class Chat extends StreamlitComponentBase {
  public render = (): ReactNode => {
    const { isUser, avatarStyle, seed, message } = this.props.args;
    const avatarUrl = `https://avatars.dicebear.com/api/${avatarStyle}/${seed}.svg`
    
    // Streamlit sends us a theme object via props that we can use to ensure
    // that our component has visuals that match the active theme in a
    // streamlit app.
    const { theme } = this.props
    
    // Maintain compatibility with older versions of Streamlit that don't send
    // a theme object.
    if (!theme) {
      return <div>Theme is undefined, please check streamlit version.</div>
    }

    const Chat = styled.div`
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      font-family: ${theme.font}, 'Segoe UI', 'Roboto', sans-serif;
      margin: 0;
      ${specificChatDivStyles}
    `

    const Avatar = styled.img`
      border: 1px solid transparent;
      border-radius: 50%;
      height: 3rem;
      width: 3rem;
      margin: 0;
    `

    const Message = styled.div`
      display: inline-block;
      background: ${theme.secondaryBackgroundColor};
      border: 1px solid transparent;
      border-radius: 10px;
      padding: 10px 14px;
      margin: 5px 20px;
      max-width: 70%;
    `

    return (
      <Chat isUser={isUser}>
        <Avatar src={avatarUrl} alt="profile" draggable="false"/>
        <Message>{message}</Message>
      </Chat>
    )
  }
}

export default withStreamlitConnection(Chat);
