import { ReactElement } from "react"

function Avatar(props: {src: string}): ReactElement {
  return (
     <div className='avatar'>
        <img src={props.src} alt="profile" draggable="false" />
     </div>
  )
}

export default Avatar