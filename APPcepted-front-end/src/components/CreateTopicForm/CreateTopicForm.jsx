import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";
import { createTopic } from "../../services/topicService";

// Initialize the form

const CreateTopic = () => {

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
    } catch (err) {
      alert('Failed to save: ' + err.message);
    }
  };

// RENDERING

  return (
    <div className="form-container">
      <h2>I Want To Learn Something New</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Topic Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Describe what you want to learn..."
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Request</button>
        <button onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
};

export default CreateTopic;