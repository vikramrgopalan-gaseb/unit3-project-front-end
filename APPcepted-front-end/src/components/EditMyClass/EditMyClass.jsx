//imports
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router";
import { editClass, deleteClass } from "../../services/ClassServices";

const EditMyClass = (props) => {    
    const selectedClass = props.selectedClass
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState({
        originator: selectedClass.originator,
        title: selectedClass.title,
        description: selectedClass.description,
        capacity: selectedClass.capacity,
        enrollment: [...selectedClass.enrollment],
    })

    const { title, description, capacity, enrollment } = formData

    const handleSubmit = async (event) => {
            event.preventDefault()
            let newFormData = {...formData}
            if(newFormData.capacity < newFormData.enrollment.length) {
                while (newFormData.capacity < newFormData.enrollment.length) {
                    newFormData.enrollment.pop()
                }
            }
            await editClass(newFormData, selectedClass._id)
            props.fetchClassList()
            navigate('/classes/my-classes')
        }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

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
                <textarea 
                    type="text"
                    id="desctiption"
                    value={description}
                    name="description"
                    onChange={handleChange}
                    required
                ></textarea>
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
                <p>Enrolled Students:</p>
                <ul>                    
                    {enrollment.map((student) => (
                        <li>{student.username}</li>
                    ))}
                </ul>
            </div>
            <div>
                <button type="submit">Submit changes</button>
                <button onClick={() => {
                    deleteClass(selectedClass._id)
                    props.fetchClassList()
                    navigate('/classes/my-classes')
                }}>Delete</button>
                <button onClick={() => navigate('/classes/my-classes')}>Cancel</button>
            </div>
        </form>
    )
}

export default EditMyClass