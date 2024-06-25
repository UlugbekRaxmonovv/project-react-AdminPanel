import { useState } from 'react'
// import  Header1 from './components/Header1/Header1'
import Saidbar from './components/Saidbar/Saidbar'
import Home from './pages/Home/Home'
import { Route,Routes } from 'react-router-dom'
import Products from './pages/Products/Products'
import Modul from './components/Modul/Modul'
import User from './pages/User/User'
import './App.css'

function App() {
    const [islogin, setIsLogin] = useState(false);
  document.body.style.overflow =  islogin ? "hidden" : "auto"

  return (
 <>
      {/* <Header1 /> */}
   <div className="grid-container">
     <Saidbar />
     {
        islogin ?    <Modul btn1={setIsLogin} >
        <div>
         <h2>Login</h2>
         <input type="text" />
         <input type="text" />
         <input type="text" />
         <button>Submit</button>
        </div>
         </Modul>
         :
         <></>
      }
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="products" element={<Products  btn1={setIsLogin}/>} />
       <Route path="user" element={<User/>} />
     </Routes>
   
 
   </div>
 </>
  )
}

export default App
