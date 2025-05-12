import {configureStore} from '@reduxjs/toolkit'
import loadingSlice from '../features/loading/loadingSlice';
import flightsSlice from '../features/flights/flightsSlice';
import flightSlice from '../features/flight/flightSlice';

const store = configureStore({
    reducer: {
        loading: loadingSlice.reducer,
        flights: flightsSlice.reducer,
        flight: flightSlice.reducer
    }
})


export default store