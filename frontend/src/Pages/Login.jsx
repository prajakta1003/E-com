import React, { useState } from 'react'
import './CSS/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  const [data,setData]= useState({
    email:"",
    password:""
  })

  const[loading,setLoading] = useState(false)

  const[error, setError] = useState("")

  const handleLogin=async () =>{
    setLoading(true)
    try{
      const response= await fetch("http://localhost:4000/user/login", {
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({...data})
      })
      const json= await response.json()
      if(response.ok){
        localStorage.setItem("user", JSON.stringify(json))
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
          <h1>Login</h1>
          <div className="loginsignup-fields">
          <input type="email" value={data.email} onChange={(e) => {setData({...data,email : e.target.value})}} placeholder='Email address' />
          <input type="password" value={data.password} onChange={(e) => {setData({...data,password : e.target.value})}} placeholder='Password' />
          </div>
          <button onClick={handleLogin}>{loading ? "loading" : "Login"}</button>
          <p className='loginsignup-login'>Don't have an account <Link to={`/signup`}><span>Register here</span></Link></p>
        </div>
    </div>
  )
}


export default Login