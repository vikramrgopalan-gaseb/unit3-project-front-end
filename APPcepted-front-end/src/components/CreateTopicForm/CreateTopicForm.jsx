import { useState, useContext } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { createTopic } from "../../services/topicService";

// Initialize the form

const CreateTopic = () => {

    // Initilize empty array

  const [formData, setFormData] = useState({
    originator: `${user._id}`, 
    title: '', 
    description: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

// Form fields that the user sees (rendered)

  return (
    <div className="form-container">
      <h2>Learn Something New</h2>
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
      </form>
    </div>
  );
};

export default CreateTopic;