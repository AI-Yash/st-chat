import React, { Component, ReactElement } from 'react'

function ClipIcon(): ReactElement {
    return (
        <svg viewBox="0 0 24 24" className='clip'>
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
    )
}

function CheckIcon(): ReactElement {
    return (
        <svg viewBox="0 0 16 16" className='check'>
        <path d="M13.25 4.75L6 12L2.75 8.75" />
        </svg>
    )
}

function CopyButton(props: {onClick: () => void, visible: boolean}) {
    const [copied, setCopied] = React.useState(false);

    const clickHandler = props.onClick;
    
    const handler = () => {
        setCopied(true)
        clickHandler()
        setTimeout(() => setCopied(false), 1000)
    }

    if (!props.visible) {
        return null;
    }

    return (
      <div className={`copy-button ${copied ? 'clicked' : ''}`} onClick={handler}>
        <ClipIcon/>
        <CheckIcon/>
        <span>{copied ? 'Copied' : 'Copy'}</span>
      </div>
    )
}

export default CopyButton
