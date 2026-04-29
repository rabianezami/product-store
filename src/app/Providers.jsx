import { QueryClientProvider } from "@tanstack/react-query"
import { Provider } from "react-redux"
import { queryClient } from "./queryClient"
import { store, persistor } from "./store"

import { PersistGate } from "redux-persist/integration/react"

export const AppProviders = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
               <PersistGate loading={null} persistor={persistor}>
                  {children}
               </PersistGate>
            </Provider>
        </QueryClientProvider>
    )
}