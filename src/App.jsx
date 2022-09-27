import React, { useState } from 'react'
import './App.css'
import SearchPhoto from './components/SearchPhoto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="countainer"></div>
      <h1 className="title">React Photo Search App</h1>
      <SearchPhoto />
    </div>
  )
}

export default App
