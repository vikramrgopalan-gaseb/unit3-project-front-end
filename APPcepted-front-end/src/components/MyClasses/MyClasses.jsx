import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router";

const MyClasses = (props) => {
    const { user } = useContext(UserContext)
    const [myClassList, setMyClassList] = useState([])

    useEffect(() => {
        const filteredClassList = props.classes.filter((aClass) => aClass.originator === user._id)
        setMyClassList(filteredClassList)
    }, [props.classes])

    const mappedClasses = myClassList.map((aClass) => (
        <li key={aClass._id}>
            <Link to={`/classes/my-classes/${aClass._id}`} onClick={() => props.setSelectedClass(aClass)}>{aClass.title}</Link>
        </li>
        
    ))

    return (
        <main className="my-classes-list">
            <h2>Your Classes</h2>
            {mappedClasses}
        </main>
    )
}

export default MyClasses