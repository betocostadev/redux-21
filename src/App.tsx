import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store/index'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Router from './router'
import Subscribed from './components/Subscribed'
import Home from './components/Home'
import GlobalStyle from './styles/GlobalStyle'

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <Home />
        <Subscribed />
        <ToastContainer />
        <GlobalStyle />
      </Provider>
    </>
  )
}

export default App
