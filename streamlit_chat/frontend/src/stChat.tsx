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
    // eslint-disable-next-line 
    let isUser = this.props.args["is_user"]
    let pfpSeed = this.props.args["seed"]
    let avatarUrl = `https://avatars.dicebear.com/api/bottts/${pfpSeed}.svg`

    return (
      <div className="chat">
        <img src={avatarUrl} alt="profile" />
        <div>
          {this.props.args["message"]}
        </div>
      </div>
    )
  }
}

export default withStreamlitConnection(Chat);
