import { useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { enrollInClass, disenrollInClass } from "../../services/homeServices";

const EditUserClass = (props) => {
    const { selectedClass, setSelectedClass, classes, fetchClassList } = props
    const { user } = useContext(UserContext)

    useEffect(() => {
        if(!selectedClass._id || !classes.length) {
            return
        }
        const updatedSelectedClass = classes.find((foundClass) => foundClass._id === selectedClass._id)
        if(updatedSelectedClass) {
            setSelectedClass(updatedSelectedClass)
        }
    }, [classes])
    return (
        <main>
            <h2>{selectedClass.title}</h2>
            <p>{selectedClass.description}</p>
            <p>Maximum class size: {selectedClass.capacity}</p>
            {/* if there is space in class... */}
            {selectedClass.enrollment.length < selectedClass.capacity ? (
                user ? (
                    //if the user is signed in, render the enroll button
                    <button onClick={async () => {
                        enrollInClass(user, selectedClass._id)
                        await fetchClassList()
                    }}>Enroll</button>
                ) : (
                    //else display the amount of open slots
                    <p>There are {selectedClass.capacity - selectedClass.enrollment} slots left </p>
                )
            ) : (
                //if there is no space in class, render notice
                <p>This class is full</p>
            )}
            <div>
                <h3>Roster:</h3>
                {/* if there are any students enrolled, list their usernames */}
                {selectedClass.enrollment.length ? (
                    <ul>
                        {selectedClass.enrollment.map(student => (
                            <li key={student._id}>
                                {student.username}
                                {/* if the enrolled student is the logged in student, render a disenroll button */}
                                {student._id === user._id ? (
                                    <button onClick={async () => {
                                        disenrollInClass(user, selectedClass._id)
                                        await fetchClassList()
                                    }}>Disenroll</button>
                                ) : (null)}
                            </li>
                        ))}
                    </ul>
                ) : (
                    // if there are no logged in students, display message
                    <p>Be the first to enroll!</p>
                )}
            </div>
        </main>
    )
}

export default EditUserClass