import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"

class Chat extends StreamlitComponentBase {
  public render = (): ReactNode => {
    return "Hello WOrld"
  }
}

export default withStreamlitConnection(Chat);
