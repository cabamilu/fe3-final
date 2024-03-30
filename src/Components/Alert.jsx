import { useState } from 'react'
import { useAppStates } from './utils/global.context'
import './Alert.css'

const Alert = ({ message, onClosed }) => {
  const { state } = useAppStates()
  const [closed, setClosed] = useState(false)

  const onClose = (e) => {
    if (!closed) {
      e.preventDefault()
      setClosed(true)

      if (typeof onClosed === 'function') onClosed()
    }
  }

  return (
    <>
      {!closed && (
        <div className="alert-message-container" onClick={onClose}>
          <div
            className={`alert-message ${state.darkMode ? 'alert-message-dark' : 'alert-message-light'}`}
          >
            <h3>{message}</h3>
            <button onClick={onClose}>Ok</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Alert
