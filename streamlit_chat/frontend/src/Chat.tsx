import { ReactNode } from "react"

function ChatElement(props: React.PropsWithChildren<{
    isUser: boolean, 
    avatar: boolean,
    children: ReactNode
}>) {
  const { isUser, avatar, children } = props
  let classList: string[] = ['chat']

  classList.push(isUser ? 'user' : 'bot')

  if (!avatar)
    classList.push('no-avatar')

  return (
    <div className={classList.join(' ')}>
        {children}
    </div>
  )
}

export default ChatElement
