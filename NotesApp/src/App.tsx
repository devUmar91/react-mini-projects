import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navigate, Route, Routes } from 'react-router-dom'
import NewNote from './NewNote'
import Home from './assets/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/new' element={<NewNote/>}/>
           <Route path='/:id'>
                <Route index  element={<h1>Show</h1>}/>
                <Route path='edit' element={<h1>Edit</h1>}/>
           </Route>
           <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
  )
}

export default App
