import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Password } from '@mui/icons-material';

const Localhost = () => {


   const [name, setName] = useState('');
   const [password, setPwd] = useState('');
   const [email, setEmail] = useState('');
   const [mobile, setMobile] = useState('');

   const handle = () => {
    const user ={
        name:name,
        email:email,
        mobile:mobile,
        password:password
    }
    const users = window.localStorage.getItem('users');

    const prevUsers = JSON.parse(users)
    
    if (users == null){
    const arr = [user]

    window.localStorage.setItem('users', JSON.stringify(arr))
    }
else{
    const arr = [...prevUsers, user]
        
        window.localStorage.setItem('users', JSON.stringify(arr))
}
    


   };
   const remove = () => {
      localStorage.removeItem('Name');
      localStorage.removeItem('Password');
   };
   return (
      <div className="App">
         <h1>Name of the user:</h1>
         <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <h1>Password of the user:</h1>
         <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPwd(e.target.value)}
         />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
            <input
            type="mobile"
            placeholder="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
         />
         <div>
            <button onClick={handle}>Done</button>
         </div>
         {localStorage.getItem('Name') && (
            <div>
               Name: <p>{localStorage.getItem('Name')}</p>
            </div>
         )}
         {localStorage.getItem('Password') && (
            <div>
               Password: <p>{localStorage.getItem('Password')}</p>
            </div>
         )}
         <div>
            <button onClick={remove}>Remove</button>
         </div>
      </div>
   );
};

export default Localhost