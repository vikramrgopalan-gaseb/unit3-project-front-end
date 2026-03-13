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
            {selectedClass.enrollment.length < selectedClass.capacity ? (
                <button onClick={() => {
                    enrollInClass(user, selectedClass._id)
                    props.fetchClassList()
                }}>Enroll</button>
            ) : (
                <p>This class is full</p>
            )}
            <div>
                <h3>Roster:</h3>
                {selectedClass.enrollment.length > 0 ? (
                    <ul>
                        {selectedClass.enrollment.map(student => (
                            <li key={student._id}>
                                {student.username}
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
                    <p>Be the first to enroll!</p>
                )}
            </div>
        </main>
    )
}

export default EditUserClass