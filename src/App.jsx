import {BrowserRouter, Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Produc from './pages/Produc'
import Cart from './pages/Cart'
import Login from './pages/Login'

function App() {


  return (
    <>
       <div>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/search' element={<Search />}  />
      <Route path='/cart' element={<Cart />}  />
      <Route path='/login' element={<Login />}  />
      <Route path='/product/:id' element={<Produc />}  />

      </Routes>
    
    </BrowserRouter>


       </div>
     
      
    </>
  )
}

export default App
