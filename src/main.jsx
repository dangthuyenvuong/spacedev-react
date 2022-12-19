import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './stores'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      {/* <AuthProvider> */}
        <App />
      {/* </AuthProvider> */}
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
)


/**
 * react-redux: Dùng để connect redux store với ứng dụng React thông qua Context API của React
 * 
 */