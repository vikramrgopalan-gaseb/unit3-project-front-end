const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/`;

const homeData = async () => {
  try {

    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to get homepage data');
    }

    // Return a lit of topisc and classes
    return await response.json(); 
  } 
  
  catch (error) {
    throw error;
  }
};

const enrollInClass = async (user, classId) => {
  try {
    const res = await fetch(`${BASE_URL}/${classId}/enroll`, {
      method: 'PUT',
      headers: {
        'content-Type': 'applications/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(user)
    })

    return res.json()
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

const disenrollInClass = async (user, classId) => {
  try {
    const res = await fetch(`${BASE_URL}/${classId}/disenroll`, {
      method: 'PUT',
      headers: {
        'content-Type': 'applications/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(user)
    })

    return res.json()
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

const upvoteTopic = async (topicId) => {
    try {
        const res = await fetch(`${BASE_URL}/${topicId}/upvote`, {
            method: 'POST',
             headers: {
        'content-Type': 'applications/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(user)
        });


        return res.json();
    } catch (err) {
        throw err;
    }
};

const downvoteTopic = async (topicId) => {
    try {
        const res = await fetch(`${BASE_URL}/${topicId}/downvote`, {
            method: 'POST',
               headers: {
        'content-Type': 'applications/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(user)
        });

        
        return res.json();
    } catch (err) {
        throw err;
    }
};

export {
    homeData,
    enrollInClass,
    disenrollInClass,
    upvoteTopic,
    downvoteTopic,
}