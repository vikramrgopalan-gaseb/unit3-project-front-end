import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { signIn } from "../../services/authServices";
import { UserContext } from "../../context/UserContext";

const SignInForm = () => {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    const [message, setMessage] = useState('')
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    // Make signin credientials accessible from formData
    const { username, password } = formData

    const handleChange = (event) => {
        setMessage('')
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            if (!username || !password) {
                setMessage('Please enter both username and password')
            } else {
                // Call the signin function from authServices
                const loggedInUser = await signIn(formData)
                
                // Set the global user state
                setUser(loggedInUser)
                
                // Send them to the homepage
                navigate('/homepage')
            }
        } catch (error) {
            
            setMessage(error.message)
        }
    }

    return (
        <main>
            <h1>Sign In</h1>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input 
                        type="text"
                        id="username"
                        value={username}
                        name="username"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input 
                        type="password"
                        id="password"
                        value={password}
                        name="password"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Log In</button>
                    <button type="button" onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </main>
    )
}

export default SignInForm