import { QueryClientProvider } from "@tanstack/react-query"
import { Provider } from "react-redux"
import { queryClient } from "./queryClient"
import { store } from "./store"

export const AppProviders = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                {children}
            </Provider>
        </QueryClientProvider>
    )
}