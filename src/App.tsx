import React from 'react'
import { Provider } from 'react-redux'
import store from './store/index'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import logo from './logo.svg';
// import './App.css';
import Subscribed from './components/Subscribed'
import Home from './components/Home'
import GlobalStyle from './styles/GlobalStyle'

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
        <Subscribed />
        <ToastContainer />
        <GlobalStyle />
      </Provider>
    </>
  )
}

export default App
