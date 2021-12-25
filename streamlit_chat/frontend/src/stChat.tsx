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
    let isUser = this.props.args["is_user"]
    let pfpSeed = this.props.args["seed"]
    let pfpType = isUser ? "personas" : "bottts"
    let avatarUrl = `https://avatars.dicebear.com/api/${pfpType}/${pfpSeed}.svg`
    let classes = isUser ? "chat user" : "chat"

    // Streamlit sends us a theme object via props that we can use to ensure
    // that our component has visuals that match the active theme in a
    // streamlit app.
    const { theme } = this.props
    const messageBoxStyle: React.CSSProperties = {}

    // Maintain compatibility with older versions of Streamlit that don't send
    // a theme object.
    if (theme) {
      // Use the theme object to style our button border. Alternatively, the
      // theme style is defined in CSS vars.
      // messageBoxStyle.border = `1px solid ${theme.primaryColor}`
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
