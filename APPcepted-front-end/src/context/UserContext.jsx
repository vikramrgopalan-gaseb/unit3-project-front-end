import { createContext, useState } from "react";

const UserContext = createContext()

const getUserFromToken = () => {
    //token is set in local storage upon sign-in/up by the functions in authServices.js
    const token = localStorage.getItem('token')
    if(!token) return null
    return JSON.parse(atob(token.split('.')[1])).payload
}

function UserProvider({ children }) {
    //set the user state so that the rest of the application can tell what user is signed in
    const [user, setUser] = useState(getUserFromToken())

    const value = { user, setUser }

    //this will wrap app.jsx within main.jsx so that the entire app will get the user context, as all components are children.
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext}