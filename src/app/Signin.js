import React from 'react'
import { useState } from 'react'
import '../css/Signin.css'

function Signin() {
  const [name,setName] = useState('')
  const [type,setType] = useState('')
  const [isSubmitted,setSubmit] = useState(false)
  const [input,setInput] = useState('')
  const [isPressed,setPress] = useState(false)
  const [data,setData] = useState({id:'',psw:''})

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
    setData((preState)=>{
      return {
        ...preState,
        id: input
      }
    })
  }

  const onSubmitHandler = ()=>{
    setSubmit(true)
    setData((preState)=>{
      return {
        ...preState,
        psw: input
      }
    })
    window.alert(`Id: ${data.id} Psw:${data.psw}`)
  }

  return (
    <div>
      <form action='http://localhost:3000/'>
        <div className='input-1'>
          <input 
            type={type} 
            name={name} 
            value={input} 
            onChange={isPressed ? inputHandler2 : inputHandler1}/>
            
          <button 
            type={isSubmitted ? 'submit' : 'button'}
            onClick={isPressed ? onSubmitHandler : onClickHandler}
          >
            {isPressed ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signin