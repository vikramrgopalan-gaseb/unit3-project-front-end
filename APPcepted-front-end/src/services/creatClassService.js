const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`

const createClass = async (formData) => {
    try {
        const res = await fetch(`${BASE_URL}/create-class`, {
            method: 'POST',
            headers: { 'Content-Type': 'applications/json'},
            body: JSON.stringify(formData)
        })

        const data = await res.json()

        if(data.error) {
            throw new Error(error)
        }
        
        throw new Error ('invalid response from server')
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export {createClass}