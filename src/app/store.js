import { configureStore } from "@reduxjs/toolkit"
import { cart } from "../features/cart/cartSlice"

export const store = configureStore ({
    reducer: {
        cart: cartReducer,
    }
})