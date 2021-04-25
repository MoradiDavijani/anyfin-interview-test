import React from 'react'

function useChangeListener(callback: () => void, deps: Array<any>) {
  const isInitialRender = React.useRef(true)
  const callbackRef = React.useRef(callback)

  React.useEffect(() => {
    callbackRef.current = callback
  })

  React.useEffect(() => {
    if (!isInitialRender.current) {
      return callbackRef.current()
    }

    isInitialRender.current = false
  }, deps)
}

export default useChangeListener
