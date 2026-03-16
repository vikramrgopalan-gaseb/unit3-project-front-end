import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router";
import { editTopic, deleteTopic } from "../../services/topicServices";

const EditMyTopic = (props) => {    
    const selectedTopic = props.selectedTopic
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
     useEffect(() => {
        
    })

     const [formData, setFormData] = useState({
        title: selectedTopic.title,
        description: selectedTopic.description,
    })

    const { title, description } = formData

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
            event.preventDefault()
            let newFormData = {...formData}
            await editTopic(newFormData, selectedTopic._id)
            props.fetchTopicList()
            navigate('/topics/my-topics')
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
                <button type="submit">Submit changes</button>
                <button onClick={() => deleteTopic(selectedTopic._id)}>Delete</button>
                <button onClick={() => navigate('/topics/my-topics')}>Cancel</button>
            </div>
        </form>
    )
}

export default EditMyTopic