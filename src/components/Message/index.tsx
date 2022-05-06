import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { TransitionGroup } from 'react-transition-group'
import Transition from '../Transition/transition'
import Message, { MessageType } from './message'
import { v4 as uuidV4 } from 'uuid'

export interface MessageApi {
  info: (text: string) => void
  success: (text: string) => void
  warning: (text: string) => void
  error: (text: string) => void
}

export interface Notice {
  text: string
  key: string
  type: MessageType
}

const getUUID = (): string => uuidV4()

let add: (notice: Notice) => void

export const MessageContainer = () => {
  const [notices, setNotices] = useState<Notice[]>([])
  const timeout = 3 * 1000
  const maxCount = 10

  const remove = (notice: Notice) => {
    const { key } = notice
    setNotices((prevNotices) => prevNotices.filter((item) => key !== item.key))
  }

  add = (notice: Notice) => {
    setNotices((prevNotices) => [...prevNotices, notice])
    setTimeout(() => {
      remove(notice)
    }, timeout)
  }

  useEffect(() => {
    if (notices.length > maxCount) {
      const [firstNotice] = notices
      remove(firstNotice)
    }
  }, [notices])

  return (
    <div className="message-container">
      <TransitionGroup>
        {notices.map(({ text, key, type }) => (
          <Transition timeout={200} in animation={'slide-in-top'} key={key}>
            <Message type={type} text={text} />
          </Transition>
        ))}
      </TransitionGroup>
    </div>
  )
}

let el = document.querySelector('#message-wrapper')
if (!el) {
  el = document.createElement('div')
  el.className = 'message-wrapper'
  el.id = 'message-wrapper'
  document.body.append(el)
}

ReactDOM.render(<MessageContainer />, el)

export const message: MessageApi = {
  info: (text) => {
    add({
      text,
      key: getUUID(),
      type: 'info'
    })
  },
  success: (text) => {
    add({
      text,
      key: getUUID(),
      type: 'success'
    })
  },
  warning: (text) => {
    add({
      text,
      key: getUUID(),
      type: 'warning'
    })
  },
  error: (text) => {
    add({
      text,
      key: getUUID(),
      type: 'danger'
    })
  }
}

export default message
