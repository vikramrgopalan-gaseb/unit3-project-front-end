import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";
import { createClass } from "../../services/creatClassService";

const createClass = () => {
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const [formData, setFormData] = useState({
        originator: `${user._id}`,
        title: '',
        description: '',
        capacity: 0,
    })

    const { title, description, capacity } = formData
    
    //handlesubmit
    const handleSubmit = async (event) => {
        event.preventDefault()
        const newClass = await createClass(formData)
        navigate('/')
    }

    //handlechange
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    //form
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title: </label>
                <input 
                    type="text"
                    id="title"
                    value={title}
                    name="title"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description: </label>
                <input 
                    type="text"
                    id="desctiption"
                    value={description}
                    name="description"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="capacity">Class Size: </label>
                <input 
                    type="number"
                    id="capacity"
                    value={capacity}
                    name="capacity"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <button type="submit">Submit</button>
                <button onClick={() => navigate('/')}>Cancel</button>
            </div>
        </form>
    )
}

export default createClass