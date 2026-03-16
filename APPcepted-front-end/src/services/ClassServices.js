const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`

const postNewClass = async (formData) => {
    try {
        const res = await fetch(`${BASE_URL}/classes/create-class`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
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

//edit class
const editClass = async (formData, classId) => {
    try {
        const res = await fetch(`${BASE_URL}/classes/${classId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
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

//delete class
const deleteClass = async (classId) => {
    try {
        const res = await fetch(`${BASE_URL}/classes/${classId}`, {
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
    postNewClass,
    editClass,
    deleteClass,
}