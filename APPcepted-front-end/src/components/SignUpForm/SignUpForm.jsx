import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { signUp } from "../../services/authServices";
import { UserContext } from "../../context/UserContext";

const SignUpForm = () => {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    const [message, setMessage] = useState()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordConfirm: '',
    })

    //make each key in the formData object accessible on its own.
    const { username, password, passwordConfirm } = formData

    const handleChange = (event) => {
        setMessage('')
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault()
            if(!username) {
                setMessage('Please enter a username')
            } else if(!password) {
                setMessage('Please enter a password')
            } else if(password !== passwordConfirm) {
                setMessage('Passwords do not match')
            } else {
                const newUser = await signUp(formData)
                setUser(newUser)
                navigate('/')
            }
        } catch (error) {
            //error message defined in back end
            setMessage(error.message)
        }
    }
    
    return (
        <main>
            <h1>Sign Up</h1>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input 
                        type="text"
                        id="name"
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
                    <label htmlFor="passwordConfirm">Confirm Password: </label>
                    <input 
                        type="password"
                        id="passwordConfirm"
                        value={passwordConfirm}
                        name="passwordConfirm"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </main>
    )    
}

export default SignUpForm