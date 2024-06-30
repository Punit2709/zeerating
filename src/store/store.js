import {configureStore} from '@reduxjs/toolkit'
import movieoSlice from './movieSlice'
export const store = configureStore({
    reducer: {
        movieoData: movieoSlice
    }
})

