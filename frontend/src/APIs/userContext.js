import { createContext, useState } from 'react';

export const UserContext = createContext({})

const UserProvider = ({ children }) => {
    const [user,setUser] = useState({})

    const userHandler = (u) =>{
        setUser(u)
    }
    return (
        <UserContext.Provider value={{ user, userHandler }}>
          {children}
        </UserContext.Provider>
      );
}

export default UserProvider