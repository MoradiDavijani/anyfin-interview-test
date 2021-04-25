import React from 'react'
import { createQueryReducer, StateType } from './reducer'

type QueryArgs<DataType> = {
  initialData: DataType
  fetcher: () => Promise<DataType>
}

function useQuery<DataType>({ initialData, fetcher }: QueryArgs<DataType>) {
  const [{ data, isLoading, isFailed }, dispatch] = React.useReducer(
    createQueryReducer<DataType>(),
    {
      data: initialData,
      isLoading: false,
      isFailed: false
    }
  )

  const fetchData = () => {
    dispatch({ type: 'init' })
    return fetcher()
      .then(data => dispatch({ type: 'success', payload: data }))
      .catch(() => dispatch({ type: 'fail' }))
  }

  return { data, isLoading, isFailed, fetchData }
}

export default useQuery
