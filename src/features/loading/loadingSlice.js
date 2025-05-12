import {createSlice} from '@reduxjs/toolkit'

const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        isLoading: false
    },
    reducers: {
        setStartLoading : state => {
            state.isLoading = true
        },
        setFinishLoading : state => {
            state.isLoading = false
        }
    }
});

export const {setFinishLoading, setStartLoading} = loadingSlice.actions
export default loadingSlice