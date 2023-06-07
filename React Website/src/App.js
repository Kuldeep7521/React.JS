import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import './Componets/Navbar'
import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import Login from './Componets/Login';
import Error from './Componets/Error';
import Profile from './Componets/Profile';
import Footer from './Componets/Footer';
import Shop from './Componets/Shop';
import Product_Page from './Componets/Product_Page';
import Wishlist from './Componets/Wishlist';
import Blog from './Componets/Blog';
import Menshop from './Componets/Menshop';
import Address from './Componets/Address';
import Payment_details from './Componets/Payment_details';
import { Payment } from '@mui/icons-material';
import Localhost from './Componets/Localhost';
import Oder from './Componets/Oder';
import Profileinfo from './Componets/Profileinfo';
import Register from './Componets/Register';
import About from './Componets/About';
import Contactus from './Componets/Contactus';

function App() {  
  return (
    <div>
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home />} />
             <Route path='/Shop' element={<Shop />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contactus' element={<Contactus />} />
            
            <Route path='/Login' element={<Login />}/>
            <Route path='/Register' element={<Register />}/>
            <Route path='/Menshop'element={<Menshop/>}/>
            <Route path='/Profile' element={<Profile />}/>
            <Route path='/Profileinfo' element={<Profileinfo />}/>
            <Route path="/Address" element={<Address/>}/>
            <Route path="/Payment" element={<Payment/>}/>
            <Route path="/host" element={<Localhost/>}/>
            <Route path="/Order" element={<Oder/>}/>
            
            <Route path="/Payment_details" element={<Payment_details/>}/>
             <Route path='/Product_Page' element={<Product_Page/>}/>
            <Route path='/Wishlist' element={<Wishlist />}/>
            <Route path='/Blog' element={<Blog />}/>

            <Route path='/*' element={<Error />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
</div>

  );
}

export default App;
