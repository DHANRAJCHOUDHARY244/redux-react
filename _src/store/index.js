import { configureStore } from '@reduxjs/toolkit'
import UiSlice from './UiSlice'
import CartSlice from './CartSlice'

const store =configureStore({
    reducer:{
        ui:UiSlice,
        cart:CartSlice
    }
})
export default store