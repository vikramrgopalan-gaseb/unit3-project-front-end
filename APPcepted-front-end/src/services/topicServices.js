const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;

const createTopic = async (topicData) => {
  
  try {

    const response = await fetch(`${BASE_URL}/create-topic`, {
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

export {
    createTopic
}