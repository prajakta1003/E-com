import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'

const LoginSignup = () => {
  const [data,setData]= useState({
    name:"",
    email:"",
    password:""
  }) 


  const [loading, setLoading] = useState(false)

  const [error, setError] = useState("")

  const handleSignup= async () =>{
    setLoading(true)
    try{
      const response= await fetch("http://localhost:4000/user/signup",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({...data})
      })
      const json= await response.json()
      if(response.ok){
        localStorage.setItem("user",JSON.stringify(json))
      }
      if(!response.ok){
        setError(json.error)
      }
      console.log(json)
    }catch(error){
      console.log(error)
    }
    setLoading(false)
  }
  

  
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Signup</h1>
          <div className="loginsignup-fields">
            <input type="text" value={data.name} onChange={(e) => {setData({...data,name : e.target.value})}} placeholder='Your name' />
            <input type="email" value={data.email} onChange={(e) => {setData({...data,email : e.target.value})}} placeholder='Email address' />
            <input type="password" value={data.password} onChange={(e) => {setData({...data,password : e.target.value})}} placeholder='Password' />
          </div>
          {error && <p>{error}</p>}
          <button onClick={handleSignup}>{loading ? "loading" : "Signup"}</button>
          <p className='loginsignup-login'>Already have an account <Link to={`/login`}><span>Login here</span></Link> </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, I agree the to the terms of use and privacy policy</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup