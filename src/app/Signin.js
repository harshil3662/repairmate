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
      <div className='row'>
        <div className='container d-flex justify-content-center align-items-center'>
          <div className='signin-box'>
            <div className='row'>
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
            <div className='row'>
              <div className='signin-form border'>
                <div className='row'>
                  { isPressed ? 
                    <div className='' onClick={()=>{setPress(false)}}>
                      <div>
                        <span class="material-symbols-outlined prev">arrow_back_ios_new</span>
                      </div>
                      <div className=''>Back</div>
                    </div>
                      :
                    <div></div>
                  }
                </div>
                <div className='row'>
                  <p className='signin-lable'>Sign in</p>
                </div>
                <div className='row'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <Footer/>
      </div>
    </div>
    // <div className='tile'>
    //   <div className='signin'>

    //     <div className='logoBox'>
    //       <div>
    //         <label className='repair'>Repair</label>
    //         <label className='mate'>mate</label>
    //       </div>
    //       <div className='icon'>
    //         <img src='/settings.png'/>
    //       </div>
    //     </div>

    //     <div className='signinBox'>
    //       <div>{  isPressed ? 
    //                   <div className='prevBox' onClick={()=>{setPress(false)}}>
    //                     <div>
    //                       <span class="material-symbols-outlined prev">arrow_back_ios_new</span>
    //                     </div>
    //                     <div className='prev-lable'>Back</div>
    //                   </div>
    //                     :
    //                   <div></div>
    //             }
    //       </div>
    //       <div>
    //         <p className='signin-lable'>Sign in</p>
    //       </div>
    //       <div>
    //         <form action='http://localhost:3000/' method='post'>
    //           <div className='signin-form-box'>
    //             <div className='inputField-lable'>
    //                 {isPressed ? 
    //                     <div className='psw-box'>
    //                       <label>Password</label>
    //                       <a href='/#' className='fgt-psw'>Forgot password</a>
    //                     </div>
    //                   : 'Email or Mobile Number'
    //                 }
    //             </div>
                  
    //             <div className='signin-inputBox'>
    //               <div>
    //                 <input 
    //                   className='inpt-in-signin'
    //                   type={type}
    //                   name={name}
    //                   value={input}
    //                   onChange={isPressed ? inputHandler2 : inputHandler1}/>
    //               </div>
    //               <div>
    //                 <button 
    //                   className='btn-in-signin'
    //                   type={isSubmitted ? 'submit' : 'button'}
    //                   onClick={isPressed ? onSubmitHandler : onClickHandler}
    //                 >
    //                   {isPressed ?
    //                   'Sign-in' : 
    //                   'Go On'
    //                   }
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //     </div>

    //     <div>
    //       <div style={{fontSize:'0.9em',color:'gray'}}>Newcomer to Repairmate?</div>
    //     </div>

    //     <div>
    //       <Link to='/signup'>
    //         <button className='signup-btn'>Create a Repairmate Account</button>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className='signin-footer'><Footer/></div>
    // </div>
  )
}

export default Signin