import { createSlice } from "@reduxjs/toolkit";

const wishlistslice = createSlice({
    name: "wishList",
    initialState: [],
    reducers: {
        toggleWishlist: (state, action) => {
            const product = action.payload
            const index = state.findIndex(item => item.id === product.id)
            if (index >= 0) {
                return state.filter(item => item.id !== product.id)
            } else {
                state.push(product)
            }
        },
    },
})

export const { toggleWishlist} = wishlistslice.actions
export default wishlistslice.reducer