import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './store/index.js'
import { Provider } from 'react-redux'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ChakraProvider>
      <Router>
        <React.StrictMode>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </React.StrictMode>
      </Router>
    </ChakraProvider>
  </Provider>
)
