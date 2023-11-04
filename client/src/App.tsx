// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'

function App() {

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
