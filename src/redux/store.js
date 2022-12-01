import { configureStore } from '@reduxjs/toolkit'
import newsreducer from './reducers/newsreducer'

export const store = configureStore({
  reducer: {
    news: newsreducer
  },
})