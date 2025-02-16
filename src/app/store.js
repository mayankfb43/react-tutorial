import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import counterReducer2 from '../features/counter2/counterSlice'
import logger from 'redux-logger'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counterReducer2
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})