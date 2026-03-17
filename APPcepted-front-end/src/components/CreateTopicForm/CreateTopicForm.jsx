import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";
import { createTopic } from "../../services/topicServices";

// Initialize the form

const CreateTopic = (props) => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
    // Initilize empty array

  const [formData, setFormData] = useState({
    originator: `${user._id}`, 
    title: '', 
    description: '' });

// HANDLE CHANGE

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

// HANDLE SUBMIT

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTopic(formData);
      alert('Topic saved!');
      setFormData({ title: '', description: '' });
      props.fetchTopicList();
    } catch (err) {
      alert('Failed to save: ' + err.message);
    }
  };

// RENDERING

  return (
    <form className="create-topic-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">I Want To Learn</label>
          <input
          name="title"
          placeholder="Topic Title"
          value={formData.title}
          onChange={handleChange}
          required
          />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          className="create-topic-description"
          name="description"
          placeholder="Describe what you want to learn..."
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        </div>

        <div className="create-topic-button">
        <button type="submit">Submit Request</button>
        <button onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
  );
};

export default CreateTopic;