const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/auth`

const signUp = async (formData) => {
    try {
        //make POST request to route defined in back end server based on the form data.
        const res = await fetch(`${BASE_URL}/sign-up`, {
            method: 'POST',
            headers: { 'Content-Type': 'applications/json' },
            body: JSON.stringify(formData)
        })

        //convert response into json. that response should be the user token generated upon sign-up
        const data = await res.json()

        if (data.error) {
            throw new Error(error)
        }

        //only store the actual token, no other user information
        if(data.token) {
            localStorage.setItem('token', data.token)
            return JSON.parse(atob(data.token.split('.')[1])).payload
        }

        throw new Error('invalid response from server')

    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

//do the same for the sign-in route
const signIn = async (formData) => {
    try {
        const res = await fetch(`${BASE_URL}/sign-in`, {
            method: 'POST',
            headers: { 'Content-Type': 'application.json' },
            body: JSON.stringify(formData)
        })

        const data = await res.json()

        if(data.error) {
            throw new Error(error)
        }

        if(data.token) {
            localStorage.setItem('token', data.token)
            return JSON.parse(atob(data.token.split('.')[1])).payload
        }

        throw new Error('invalid response from server')

    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export {
    signUp,
    signIn,
}