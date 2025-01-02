import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {legacy_createStore as createStore} from 'redux'
import reducer from './store/reducer.js'
import {Provider} from 'react-redux'

const store = createStore(reducer)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
