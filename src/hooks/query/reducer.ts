type ReducerAction<StateDataType> =
  | {
      type: 'init'
    }
  | {
      type: 'success'
      payload: StateDataType
    }
  | {
      type: 'fail'
    }

export type StateType<StateDataType> = {
  data: StateDataType
  isLoading: boolean
  isFailed: boolean
}

export const createQueryReducer = <StateDataType>() => (
  state: StateType<StateDataType>,
  action: ReducerAction<StateDataType>
): StateType<StateDataType> => {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        isLoading: true,
        isFailed: false
      }
    case 'success':
      return {
        data: action.payload,
        isLoading: false,
        isFailed: false
      }
    case 'fail':
      return {
        ...state,
        isLoading: false,
        isFailed: true
      }
  }
}
