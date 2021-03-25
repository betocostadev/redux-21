import React from 'react'
import { Provider } from 'react-redux'
import store from './store/index'
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
        <GlobalStyle />
      </Provider>
    </>
  )
}

export default App
