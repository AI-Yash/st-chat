import {
  // eslint-disable-next-line 
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import "./index.css"

class Chat extends StreamlitComponentBase {
  public render = (): ReactNode => {
    const { isUser, avatarStyle, seed } = this.props.args;
    let avatarUrl = `https://avatars.dicebear.com/api/${avatarStyle}/${seed}.svg`
    let classes = isUser ? "chat user" : "chat"

    // Streamlit sends us a theme object via props that we can use to ensure
    // that our component has visuals that match the active theme in a
    // streamlit app.
    const { theme } = this.props
    const messageBoxStyle: React.CSSProperties = {}

    // Maintain compatibility with older versions of Streamlit that don't send
    // a theme object.
    if (theme) {
      messageBoxStyle.backgroundColor = theme.secondaryBackgroundColor 
    }

    return (
      <div className={classes}>
        <img src={avatarUrl} alt="profile" draggable="false"/>

        <div className="message" style={messageBoxStyle}>
          {this.props.args["message"]}
        </div>
      </div>
    )
  }
}

export default withStreamlitConnection(Chat);
