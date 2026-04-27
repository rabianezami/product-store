import { configureStore } from "@reduxjs/toolkit"
import  cartReducer  from "../features/cart/cartSlice"
import wishlistReducer from "../features/favorites/wishlistslice"

export const store = configureStore ({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
    }
})