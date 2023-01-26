import { configureStore } from '@reduxjs/toolkit'
import  trip  from './slices/trip'

const store = configureStore({
  reducer: {
    trip
  },
})

export default store