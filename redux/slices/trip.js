import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  trips: [],
}

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    addTrip: (state, action)=>{
        state.trips = [...state.trips, action.payload]
    },
    addExpense: (state, action)=>{
        let tripId = action.payload.tripId;
        state.trips = state.trips.map(trip=>{
            if(trip.id==tripId) trip.expenses = [...trip.expenses, action.payload];
            return trip;
        });
    }
  },
})

// Action creators are generated for each case reducer function
export const { addExpense, addTrip } = tripSlice.actions

export default tripSlice.reducer