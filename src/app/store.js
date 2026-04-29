import { configureStore, combineReducers } from "@reduxjs/toolkit"
import  cartReducer  from "../features/cart/cartSlice"
import wishlistReducer from "../features/favorites/wishlistslice"
import { persistStore, persistReducer } from "redux-persist"
import checkoutReducer from "../features/checkout/checkoutSlice"

const customStorage = {
    getItem: (key) => Promise.resolve(localStorage.getItem(key)),
    setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
    removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
}

const rootReducer = combineReducers({
    cart: cartReducer,
    wishlist: wishlistReducer,
    checkout: checkoutReducer,
})

const persistConfig = {
    key: "root",
    storage: customStorage,
    whitelist: ["cart", "wishlist"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore ({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
          "persist/FLUSH",
          "persist/PAUSE",
          "persist/PURGE",
        ],
      },
    }),
});
     
export const persistor = persistStore(store)