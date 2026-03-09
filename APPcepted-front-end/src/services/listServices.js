const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`

const classes = async () => {
    try {
        //make a GET request based on the route in the back end server
        const res = await fetch(`${BASE_URL}/classes`)
        //no authentication needed here because this information should be visible to all visitors to the page, regardless of whether or not they have an account.

        //convert retrieved data into JSON. should be all classes
        const data = res.json()

        if(data.error) {
            throw new Error(error)
        }

    } catch (error) {
        console.log(error)
        throw new Error(error)
    }

}

//do the same for topics
const topics = async () => {
    try {
        const res = await fetch(`${BASE_URL}/topics`)

        const data = res.json()

        if(data.error) {
            throw new Error(error)
        }

    } catch (error) {
        console.log(error)
        throw new Error(error)
    }

}

export {
    classes,
    topics
}