import { useState,useEffect } from 'react'
import '../css/Signup.css'
import Footer from './Footer'

function Signup() {

  const [pointer,setPointer] = useState(0)
  const [state,setState] = useState([
    { lable : 'Fullname',input:'text',value:'',button:'button',name:'uName'},
    { lable : 'Your Email',input:'email',value:'',button:'button',name:'uEmail'},
    { lable : 'Mobile No',input:'tel',value:'',button:'button',name:'uMobile'},
    { lable : 'Password',input:'password',value:'',button:'button',name:'uPSW'},
    { lable : 'Re-type the Password:',input:'password',value:'',button:'button',name:'uRPSW'}
  ])

  const clickHandler = ()=>{
    setPointer(pointer+1)
  }

  const submitHandler = (e)=>{
    e.preventDefault()
    window.alert()
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
          { pointer !== 0 ? 
          <div className='mb-2'>
            <i className="d-inline bi bi-arrow-left-circle-fill fs-4 prev" onClick={()=>{setPointer(pointer-1)}}></i>
          </div> : <></> }
          <div className='row'>
            <p className='fs-3 fw-bold'>Sign Up</p>
          </div>
          <div className='row'>
            <form>
              <div className="row form-floating mb-3">
                <input 
                  type={state[pointer].input}
                  name={state[pointer].name}
                  value={state[pointer].value}
                  className="fs-5 form-control" 
                  id="floatingInput"
                  onChange={onChangeHandler}
                  placeholder=" "
                  autocomplete="off"
                  />
                <label for="floatingInput">{state[pointer].lable}</label>
              </div>
              <div className='row'>
                <button
                 className='p-2 signin-btn fw-bold rounded' 
                 type={state[pointer].button} 
                 onClick={(pointer === 4) ? submitHandler : clickHandler}>
                  {(pointer === 4) ? 'Create account' : 'Next'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='row position-fixed bottom-0 start-0 end-0'>
        <Footer/>
      </div>
    </div>
  )
}

export default Signup