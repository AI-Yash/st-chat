// import React from 'react'

function Avatar(props: {src: string}) {
  return (
     <div className='avatar'>
        <img src={props.src} alt="profile" draggable="false" />
     </div>
  )
}

export default Avatar