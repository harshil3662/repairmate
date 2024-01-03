import { useState,useEffect } from 'react'
import '../css/Signup.css'
import Footer from './Footer'

function Signup() {

  const [pointer,setPointer] = useState(0)
  const [state,setState] = useState([
    { lable : 'Enter Your Name:',input:'text',value:'',button:'button',name:'uName'},
    { lable : 'Register Your Email:',input:'email',value:'',button:'button',name:'uEmail'},
    { lable : 'Register Your Mobile:',input:'tel',value:'',button:'button',name:'uMobile'},
    { lable : 'Make Your Password:',input:'password',value:'',button:'button',name:'uPSW'},
    { lable : 'Re-type the Password:',input:'password',value:'',button:'button',name:'uRPSW'}
  ])

  const clickHandler = ()=>{
    setPointer(pointer+1)
  }

  const submitHandler = (e)=>{
    e.preventDefault()

    const updatedState = [...state]
    updatedState[pointer].button = 'submit'
    setState(updatedState)
  }

  const onChangeHandler = (e)=>{
    const updatedState = [...state]
    updatedState[pointer].value = e.target.value
    setState(updatedState)
  }

  return (
    <div className='tile'>

      <div className='signup'>
        <div className='logoBox'>
          <div>
            <label className='repair'>Repair</label>
            <label className='mate'>mate</label>
          </div>
          <div className='icon'>
            <span class="material-symbols-outlined">
            construction
            </span>
          </div>
        </div>

        <div className='signupBox'>
          <div>{  pointer !== 0 ? 
                  <div className='prevBox' onClick={()=>{setPointer(pointer-1)}}>
                    <div>
                      <span class="material-symbols-outlined prev">arrow_back_ios_new</span>
                    </div>
                    <div className='prev-lable'>Back</div>
                  </div>
                    :
                  <div></div>
              }
          </div>
          <div>
            <p className='signup-lable'>Sign Up</p>
          </div>
          <div>
            <form action='http://localhost:3000/' method='post'>
              <div className='signup-form-box'>
                <div className='inputField-lable'>
                  {state[pointer].lable}
                </div>
                <div className='signup-inputBox'>
                    <input
                      className='inpt-in-signup'
                      type={state[pointer].input}
                      name={state[pointer].name}
                      value={state[pointer].value}
                      onChange={onChangeHandler} />
                </div>
                <div>
                  <button 
                    className='btn-in-signup' 
                    type={state[pointer].button}
                    onClick={pointer===4 ? submitHandler : clickHandler}
                  >
                    {pointer===4 ? 'Create account' : 'Proceed Next'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='signup-footer'><Footer/></div>
    </div>
  )
}

export default Signup