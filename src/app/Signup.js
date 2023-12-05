import { useState,useEffect } from 'react'
import '../css/Signup.css'
import { Link } from 'react-router-dom'

function Signup() {

  const lableList = [
    "Enter your name",
    "Register your email",
    "Register your Mobile",
    "Enter your password",
    "Re-type your password"
  ]

  const [values,setValues] = useState([])

  const [state,setState] = useState({
    lable:'',
    inputType:'',
    buttonType:'',
    input:'',
    name:''
  })

  useEffect(()=>{
    setState({
      ...state,
      lable: lableList[0],
      inputType:'text',
      buttonType:'button',
      name:'uName'
    })
  },[state])

  const clickHandler = ()=>{
    setValues(values.push(state.input))
  }

  const onChangeHandler = (e)=>{
    setState({
      ...state,
      input : e.target.value
    })
  }

  return (
    <div className='tile'>

      <div className='signup'>
        <div className='logoBox'>
          <div className='logo-name'>Repairmate</div>
          <div>
            <span class="material-symbols-outlined icon">
                build_circle
            </span>
          </div>
        </div>
      </div>

      <div className='signupBox'>
        <div>
          <p className='header'>Sign Up</p>
        </div>
        <div>
          <form action='http://localhost:3000/'>
            <div className='signup-form-box'>
              <div className='inputField-lable'>
                {state.lable}
              </div>
              <div className='signup-inputBox'>
                <div>
                  <input
                    className='inpt-in-signup'
                    type={state.inputType}
                    name={state.name}
                    value={state.input}
                    onChange={onChangeHandler} />
                </div>

                <div>
                  <button 
                    className='btn-in-signup' 
                    type={state.buttonType}
                    onClick={clickHandler}
                  >
                    Next
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

export default Signup