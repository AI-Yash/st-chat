import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface MessageProps {
    isUser: boolean;
    theme: any;
    avatarUrl: string;
    message: string;
}

class MessageBox extends React.Component<MessageProps> {
    Avatar = styled.img`
        border: 1px solid transparent;
        border-radius: 50%;
        height: 3rem;
        width: 3rem;
        margin: 0;
        &:hover {
            border: 1px solid ${this.props.theme.primaryColor};
        }
    `
    
    Message = styled.div({
        display: 'inline-block',
        background: this.props.theme.secondaryBackgroundColor,
        border: '1px solid transparent',
        borderRadius: '10px',
        padding: '10px 14px',
        margin: '5px 20px',
        maxWidth: '70%'
    })

    ChatBoxDiv = styled.div({
        display: 'flex',
        // flexDirection: 'row',
        fontFamily: `${this.props.theme.font}, 'Segoe UI', 'Roboto', sans-serif`, 
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

    public render = (): React.ReactNode => {
        return (
            <this.ChatBoxDiv isUser={this.props.isUser}>
                <this.Avatar src={this.props.avatarUrl} alt="profile" draggable="false"/>
                <this.Message>{this.props.message}</this.Message>
            </this.ChatBoxDiv>
        )
    }
}

export default MessageBox;
