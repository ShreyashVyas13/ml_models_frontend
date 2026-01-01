import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/Global.css'
import Home from './pages/Home'
import Linear from './pages/Linear'
import Logistic from './pages/Logistic'
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/linear' element={<Linear />} />
          <Route path='/logistic' element={<Logistic />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
