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

export {
    homeData
}