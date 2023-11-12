import React from 'react'
import { useState } from 'react'
import '../css/Signin.css'

function Signin() {
  const [name,setName] = useState('')
  const [type,setType] = useState('')
  const [isSubmitted,setSubmit] = useState(false)
  const [input,setInput] = useState('')
  const [isPressed,setPress] = useState(false)

  const inputHandler1 = (e)=>{
    const value = e.target.value
    setInput(value)

    if (value.includes('@')) {
      setType('email')
      setName('uEmail')
    } else {
      setType('tel')
      setName('uPhoneNumber')
    }
  }

  const inputHandler2 = (e)=>{
    const value = e.target.value
    console.log(value)
    setInput(value)
  }

  const onClickHandler = ()=>{
    setPress(true)
    setInput('')
    setType('password')
    setName('uPass')
  }

  const onSubmitHandler = ()=>{
    setSubmit(true)
    window.alert('form submitted')
  }

  return (
    <div className='signin'>
      <div>
        <p className='logo-name'>Repairmate
        
          <span class="material-symbols-outlined icon">
            build_circle
          </span>
        </p>
      </div>
      <div className='signinBox'>
        <div>
          <p className='header'>Sign in</p>
        </div>
        <div>
          <form action='http://localhost:3000/'>
            <div className='box'>
              <div>
                <label className='inputField'>{isPressed ? 'Password' : 'Email or Mobile Number'}</label>
              </div>
                
              <div className='inputBox'>
                <div className='inputBox-1'>
                  <input 
                    className='inpt'
                    type={type}
                    name={name}
                    value={input}
                    onChange={isPressed ? inputHandler2 : inputHandler1}/>
                </div>
                <div className='inputBox-2'>
                  <button 
                    className='btn'
                    type={isSubmitted ? 'submit' : 'button'}
                    onClick={isPressed ? onSubmitHandler : onClickHandler}
                  >
                    {isPressed ?
                    'Go' : 
                    'Next'
                    }
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin