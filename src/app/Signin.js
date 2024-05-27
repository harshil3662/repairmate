import { useState,useEffect,useRef } from 'react'
import '../css/Signin.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Signin() {
  const [input,setInput] = useState('')
  const [name,setName] = useState('')
  const [type,setType] = useState('')
  const [isPressed,setPress] = useState(false)
  const [isSubmitted,setSubmit] = useState(false)

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
    window.alert("submitted by ",name)
  }

  return (
    <div className='container signin d-flex justify-content-center align-items-center'>
      <div className='col-xxl-5 col-xl-5 col-lg-6 col-md-7 col-sm-8 col-9'>
        <div className='row mb-2'>
          <div className='container d-flex justify-content-center align-items-center'>
            <div className='m-1'>
              <label className='lable-1 fw-bold fs-2'>Repair</label>
              <label className='lable-2 fw-bold fs-1'>mate</label>
            </div>
            <div className='logo m-1'>
              <img className='img-fluid' src='/settings.png'/>
            </div>
          </div>
        </div>
        <div className='row box border p-4 mb-5'>
          { isPressed ? 
          <div className='mb-2'>
            <i className="d-inline bi bi-arrow-left-circle-fill fs-4 prev" onClick={()=>{setPress(false)}}></i>
          </div> : <></> }
          <div className='row'>
            <p className='fs-3 fw-bold'>Sign in</p>
          </div>
          <div className='row'>
            <form>
              <div className="row form-floating mb-3">
                <input 
                  type={type} 
                  name={name} 
                  value={input} 
                  className="fs-5 form-control" 
                  id="floatingInput"
                  onChange={isPressed ? inputHandler2 : inputHandler1}
                  placeholder="name@example.com"
                  autocomplete="off"
                  />
                <label for="floatingInput">{isPressed ? "Password"  : "Email or Mobile Number" }</label>
              </div>
              <div className='row'>
                <button className='p-2 signin-btn fw-bold rounded' type={isSubmitted ? 'submit' : 'button'} onClick={isPressed ? onSubmitHandler : onClickHandler}>
                  {isPressed ? 'Sign In' : 'Next'}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='row'>
          <Link to='/signup'>
            <button className='signup-btn fw-bold rounded p-2'>Create a Repairmate Account</button>
          </Link>
        </div>
        <div className='m-4 text-center '>
          <a className='frgt' href="#">Forgot Password</a>
        </div>
      </div>
      <div className='row position-fixed bottom-0 start-0 end-0'>
        <Footer/>
      </div>
    </div>
  )
}

export default Signin