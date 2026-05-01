import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shippingInfo: {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        phone: "",
    },
    isSubmitting: false,
}

const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        updateField: (state, action) => {
            const { field, value } = action.payload
            state.shippingInfo[field] = value
        },
        resetForm: (state) => {
            state.shippingInfo = initialState.shippingInfo
        },
        setSubmitting: (state, action) => {
            state.isSubmitting = action.payload
        }
    }, 
})

export const { updateField, resetForm, setSubmitting } = checkoutSlice.actions
export default checkoutSlice.reducer