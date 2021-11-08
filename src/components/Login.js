import React,{useState,useEffect} from 'react'
import APIService from '../APIService'
import { useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'


function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [token,setToken]=useCookies(['myToken'])
    const [isLogin,setLogin]=useState(true)
    let history=useHistory()

    useEffect(()=>{
        if(token.myToken){
            history.push('/articles')
        }
       
    },[token])



    const loginBtn=()=>{
        
        APIService.loginUser({username:username,password:password})
        .then(resp=>{
            if (resp.token)
                setToken('myToken',resp.token)
        }).catch(error=>console.log(error))
    }

    const registerBtn=()=>{
        APIService.registerUser({username:username,password:password})
        .then(resp=>loginBtn()).catch(error=>console.log(error))
    }
    return (
        <div className='App'>
            <br/>
            <br/>
             {isLogin?<h1>Login</h1>:<h1>Register</h1>}
            <br/>
            <br/>
            <div className='mb-3'>
                <label htmlFor='username' className='form-label'> Username </label>
                <input type='text' className='form-control' id='username' placeholder='please enter username'
                value={username} onChange={e=>setUsername(e.target.value)}/>
            </div>

            <div className='mb-3'>
                <label htmlFor='password' className='form-label'> Password </label>
                <input type='password' className='form-control' id='password' placeholder='please enter password'
                 value={password} onChange={e=>setPassword(e.target.value)}/>
            </div>

            {isLogin?<button className='btn btn-success' onClick={loginBtn} >Login</button>:
            <button className='btn btn-success' onClick={registerBtn}>Register</button>}
            

            <div className='mb-3'>
                <br/>
                {isLogin? <h5>if you dont have an account? <button className='btn btn-primary' onClick={()=>setLogin(false)}>Register</button> here</h5>:
                <h5>if you have an account? <button className='btn btn-primary' onClick={()=>setLogin(true)}>login</button> here</h5>}

            </div>
            
        </div>
    )
}

export default Login
