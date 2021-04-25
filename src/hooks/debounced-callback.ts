import React from 'react'

function useDebouncedCallback<ArgsType, ReturnType>(
  callback: (args: ArgsType) => Promise<ReturnType>,
  delay: number
) {
  const timeoutRef = React.useRef<number | undefined>()

  const debouncedCallback: (
    args: ArgsType
  ) => Promise<ReturnType> = React.useCallback(
    (...args) => {
      window.clearTimeout(timeoutRef.current)

      return new Promise<ReturnType>(resolve => {
        timeoutRef.current = window.setTimeout(
          () => resolve(callback(...args)),
          delay
        )
      })
    },
    [callback, delay]
  )

  return debouncedCallback
}

export default useDebouncedCallback
