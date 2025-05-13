import React from 'react'
import { AppRouter } from './providers/RouterProvider'
import "./styles/index.css"
import "./styles/reset.css"
import { Provider } from 'react-redux'
import { store } from './providers/StoreProvider/config/store'

export default function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
