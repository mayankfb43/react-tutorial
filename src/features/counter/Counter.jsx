import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, incrementByAmount, fetchUsers, resetUser } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const users = useSelector((state) => state.counter.users)
  const users2 = useSelector((state) => state.counter.users2)

  const dispatch = useDispatch()

  return (
    <div>
      <div>
      <button
          aria-label="Increment value"
          onClick={() => {dispatch(incrementByAmount({amount: 1}))

            dispatch(fetchUsers({count})).unwrap().then((data) => {
              console.log(data);
            }).catch((data) => {
              console.log(data);
            });
          }}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => {

            dispatch(decrement())
            dispatch(resetUser())
          }}
        >
          Decrement
        </button>
        {users2.title}
        {JSON.stringify(users)}
        
        <span>{count}</span>
       
      </div>
    </div>
  )
}