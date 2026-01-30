import React from 'react'
import { MyComponent } from './components/MyComponent'
import './App.css'
import { OtherComponent } from './components/OtherComponent'



function App() {
  return (
    <div className="App">
      <MyComponent />
      <OtherComponent/>
      <MyComponent />
      <OtherComponent/>
      <MyComponent />
    </div>
  )
}

export default App
