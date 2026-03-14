const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;

// CREATE

const createTopic = async (topicData) => {
  
  try {

    const response = await fetch(`${BASE_URL}/topics/create-topic`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(topicData),
  });

    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } 
 
 catch (error) {
    throw error;
  }
};

// UPDATE

const editTopic = async (formData, topicId) => {
    try {
        const res = await fetch(`${BASE_URL}/topics/${topicId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'applications/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(formData)
        })

        return res.json()
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

// DELETE

const deleteTopic = async (topicId) => {
    try {
        const res = await fetch(`${BASE_URL}/topics/${topicId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        return res.json
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export {
    createTopic,
    editTopic,
    deleteTopic,
}