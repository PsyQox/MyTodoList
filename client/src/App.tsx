// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Form from './components/Form/Form'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </>
  )
}

export default App
