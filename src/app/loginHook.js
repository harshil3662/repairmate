import { useState } from 'react'

function useLogIn(status) {
    const [isSignedIn,setSignIn] = useState(status)
    const [user,setUser] = useState('')

    return {isSignedIn,setSignIn,user,setUser}
}

export default useLogIn