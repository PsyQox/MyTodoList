import { useState } from 'react'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
