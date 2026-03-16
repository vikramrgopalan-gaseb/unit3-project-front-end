// IMPORTS

import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { signIn } from "../../services/authServices";
import { UserContext } from "../../context/UserContext";

// SIGN IN FORM VARIABLE

const SignInForm = () => {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    const [message, setMessage] = useState('')
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    // CHANGE HANDLER

    const handleChange = (event) => {
        setMessage('')
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    // SUBMIT HANDLER

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            if (!username || !password) {
                setMessage('Please enter both username and password')
            } else {
                // Call the signin function from authServices
                console.log(formData)
                const signedInUser = await signIn(formData)
                
                // Set the global user state
                setUser(signedInUser)
                
                // Send them to the homepage
                navigate('/')
            }
        } catch (error) {
            
            setMessage(error.message)
        }
    }

// RENDERING

    return (
    <main className="sign-in">
      <h1>Sign In</h1>
      <p>{message}</p>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <div className="username-field">
          <label htmlFor='email'>Username:</label>
          <input
            type='text'
            autoComplete='off'
            id='username'
            value={formData.username}
            name='username'
            onChange={handleChange}
            required
          />
        </div>
        <div className="password-field">
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            autoComplete='off'
            id='password'
            value={formData.password}
            name='password'
            onChange={handleChange}
            required
          />
        </div>
        <div className="auth-button">
          <button>Sign In</button>
          <button onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </main>
  );
};

export default SignInForm;