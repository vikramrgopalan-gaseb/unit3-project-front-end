const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`

const fetchClasses = async () => {
    try {
        //make a GET request based on the route in the back end server
        const res = await fetch(`${BASE_URL}/classes`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
        })

        //convert retrieved data into JSON. should be all classes
        const data = res.json()

        if(data.error) {
            throw new Error(error)
        }

        return data
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }

}

//do the same for topics
const fetchTopics = async () => {
    try {
        const res = await fetch(`${BASE_URL}/topics`, {
             headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
        })

        const data = res.json()

        if(data.error) {
            throw new Error(error)
        }

        return data
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }

}

export {
    fetchClasses,
    fetchTopics,
}