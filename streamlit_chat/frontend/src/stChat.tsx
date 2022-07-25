import {
    // eslint-disable-next-line 
    Streamlit,
    StreamlitComponentBase,
    withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import MessageBox from "./messageBox"
// import styled from '@emotion/styled'
// import { css } from '@emotion/react'


class Chat extends StreamlitComponentBase {
    public render = (): ReactNode => {
        const { isUser, avatarUrl, message } = this.props.args;
        console.log(avatarUrl) 
        // Streamlit sends us a theme object via props that we can use to ensure
        // that our component has visuals that match the active theme in a
        // streamlit app.
        const { theme } = this.props
        console.log(theme)
        // Maintain compatibility with older versions of Streamlit that don't send
        // a theme object.
        if (!theme) {
            return <div>Theme is undefined, please check streamlit version.</div>
        }
        
        return (
            <MessageBox isUser={isUser} avatarUrl={avatarUrl} message={message} theme={theme} />
        )
    }
}

export default withStreamlitConnection(Chat);
