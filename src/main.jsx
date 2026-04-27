import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProviders } from './app/Providers.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SettingsProvider } from './features/settings/context/SettingsContext'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppProviders>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </AppProviders>
    </BrowserRouter>
  </StrictMode>
);