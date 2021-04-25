import React from 'react'
import useChangeListener from './change-listener'

function usePersistedState<InitialStateType>(
  key: string,
  initialState: InitialStateType | (() => InitialStateType)
): [InitialStateType, React.Dispatch<React.SetStateAction<InitialStateType>>] {
  const [savedState, setSavedState] = React.useState<InitialStateType>(
    initialState
  )

  React.useEffect(() => {
    try {
      const item = process.browser && localStorage.getItem(key)

      if (item) {
        setSavedState(JSON.parse(item))
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  useChangeListener(() => {
    localStorage.setItem(key, JSON.stringify(savedState))
  }, [key, savedState])

  return [savedState, setSavedState]
}

export default usePersistedState
