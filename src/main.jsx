import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

  //...
import * as Sentry from "@sentry/react";


Sentry.init({
  dsn: "https://ccb84ba916d6fa1ea29e51fb1d4d7b72@o4507507417939968.ingest.us.sentry.io/4507507421806592",
  integrations: [
    Sentry.browserTracingIntegration(),


    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration(),
  ],
  
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0, 
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
