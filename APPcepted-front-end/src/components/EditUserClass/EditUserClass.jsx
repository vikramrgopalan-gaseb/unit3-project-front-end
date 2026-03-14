import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { enrollInClass, disenrollInClass } from "../../services/homeServices";

const EditUserClass = (props) => {
    const selectedClass = props.selectedClass
    const { user } = useContext(UserContext)

    return (
        <main>
            <h2>{selectedClass.title}</h2>
            <p>{selectedClass.description}</p>
            <p>Maximum class size: {selectedClass.capacity}</p>
            {/* if there is space in class... */}
            {selectedClass.enrollment.length < selectedClass.capacity ? (
                user ? (
                    //if the user is signed in, render the enroll button
                    <button onClick={() => {
                        enrollInClass(user, selectedClass._id)
                        props.fetchClassList()
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
                {selectedClass.enrollment.length > 0 ? (
                    <ul>
                        {selectedClass.enrollment.map(student => (
                            <li key={student._id}>
                                {student.username}
                                {/* if the enrolled student is the logged in student, render a disenroll button */}
                                {key === user._id ? (
                                    <button onClick={() => {
                                        disenrollInClass(user, selectedClass._id)
                                        props.fetchClassList()
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