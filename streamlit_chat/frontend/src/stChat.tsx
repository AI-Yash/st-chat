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

    return (
      <div className={classes}>
        <img src={avatarUrl} alt="profile" />
        <div>
          {this.props.args["message"]}
        </div>
      </div>
    )
  }
}

export default withStreamlitConnection(Chat);
