import {
  StreamlitComponentBase,
  withStreamlitConnection,
  Streamlit
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import styled from '@emotion/styled'
import { css } from '@emotion/react'


class Chat extends StreamlitComponentBase {
  public componentDidUpdate = () => {
    Streamlit.setFrameHeight()
  }

  public componentDidMount = () => {
    Streamlit.setFrameHeight()
  }

  public render = (): ReactNode => {
    const { isUser, isPicture, avatarStyle, seed, message, answers } = this.props.args;
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

    // styles for the avatar image
    const Avatar = styled.img({
      border: `1px solid transparent`,
      borderRadius: '50%',
      height: '2.5rem',
      width: '2.5rem',
      margin: 0
    })

    // styles for the message box
    const Message = styled.div({
      display: 'block',
      background: theme.secondaryBackgroundColor,
      border: '1px solid transparent',
      borderRadius: '1px 10px 10px 1px',
      padding: '10px 14px',
      margin: '1px 5px',
      maxWidth: '70%',
      width: 'fit-content',
    }, (props: { isUser: boolean }) => {
      return css`
        &:first-child {
          border-radius: ${props.isUser ? '10px 1px 1px 10px' : '1px 10px 10px 1px'};
        }
        &:last-child {
          border-radius: ${props.isUser ? '10px 1px 10px 10px' : '1px 10px 10px 10px'};
        }
        & * {
          max-width: 100%;
        }
      `
    })
    const AnswerBubble = styled.div({
      display: 'block',
      background: theme.secondaryBackgroundColor,
      border: '1px solid transparent',
      borderRadius: '10px 10px 10px 10px',
      padding: '10px 14px',
      margin: '1px 5px',
      maxWidth: '70%',
      width: 'fit-content',
      marginBottom: '-10px',
      marginRight: '10px !important',
      opacity: '0.5'
    }, () => {
      return css`
        & * {
          max-width: 100%;
        }
      `
    })

    const MessageDiv = styled.div({
      width: '100%',
    }, (props: {isUser: boolean}) => {
      if (props.isUser) {
        return css`
          & div {
            margin-left: auto;
            margin-right: 0;
          }
        `
      }
      return css``
    })

    // styles for the container
    const Chat = styled.div({
      fontFamily: `${theme.font}, 'Segoe UI', 'Roboto', sans-serif`, 
      height: 'auto',
      margin: 0,
      width: '100%',
      flexFlow: 'column'
    }, 
    (props: {isUser: boolean}) => {  // specific styles
      if (props.isUser){
        return css`
          text-align: right;
        `
      }
      return css``
    })

    const Img = styled.img({
      maxWidth: '70%',
      maxHeight: '350px',
      display: 'block',
      borderRadius: '1px 10px 10px 1px',
      margin: '1px 5px'
    }, (props: { isUser: boolean }) => {
      return css`
        ${props.isUser ? 'margin-left: auto;' : 'margin-right: auto;'}
        &:first-child {
          border-radius: ${props.isUser ? '10px 1px 1px 10px' : '1px 10px 10px 1px'};
        }
        &:last-child {
          border-radius: ${props.isUser ? '10px 1px 10px 10px' : '1px 10px 10px 10px'};
        }
      `
    })
    const BubbleImg = styled.img({
      maxWidth: '70%',
      maxHeight: '350px',
      display: 'block',
      borderRadius: '10px 10px 10px 10px',
      margin: '1px 5px',
      marginBottom: '-10px',
      marginRight: '10px !important',
      opacity: '0.6',
      marginLeft: 'auto'
    })

    // The message variable could be an array of strings or a single string.
    // If it's an array, we'll render each element as a separate message.
    // If it's a string, we'll render it as a single message.
    let messages: ReactNode[] | ReactNode = []
    if (Array.isArray(message)) {
      messages = message.map((m: string, i: number) => {
        let msg
        if (isPicture[i])
          msg = <Img onLoad={() => Streamlit.setFrameHeight()} key={i} src={m} isUser={isUser} />
        else
          msg = <Message isUser={isUser} key={i}>{m}</Message>

        if (answers != null && i in answers) {
          let replied_to
          // TODO: this is not safe at all
          if (!answers[i].startsWith("data:image/jpeg;base64")) {
            replied_to = <AnswerBubble key={"answers" + i}>{answers[i]}</AnswerBubble>
          } else {
            replied_to = <BubbleImg onLoad={() => Streamlit.setFrameHeight()} key={"bubble_image" + i} src={answers[i]} />
          }

          msg = [
            replied_to,
            msg
          ]
        }

        return msg
      })
    } else {
      if (isPicture)
        messages = <Img onLoad={() => Streamlit.setFrameHeight()} src={message} isUser={isUser} key="0" />
      else
        messages = <Message isUser={isUser} key="0">{message}</Message>
    }

    return (
      <Chat isUser={isUser}>
        <Avatar src={avatarUrl} alt="profile" draggable="false"/>
        <MessageDiv isUser={isUser}>
          {messages}
        </MessageDiv>
      </Chat>
    )
  }
}

export default withStreamlitConnection(Chat);
