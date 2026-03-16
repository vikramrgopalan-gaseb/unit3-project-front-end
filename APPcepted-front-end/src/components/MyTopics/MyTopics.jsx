import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router";

const MyTopics = (props) => {
    const { user } = useContext(UserContext)
    const [myTopicList, setMyTopicList] = useState([])

    useEffect(() => {
        const filteredTopicList = props.topics.filter((aTopic) => aTopic.originator === user._id)
        setMyTopicList(filteredTopicList)
    }, [props.topics])

    const mappedTopics = myTopicList.map((aTopic) => (
        <li key={aTopic._id}>
            <Link to={`/topics/my-topics/${aTopic._id}`} onClick={() => props.setSelectedTopic(aTopic)}>{aTopic.title}</Link>
        </li>
        
    ))

    return (
        <main className="my-topics">
            <h2>Your Topics</h2>
            {mappedTopics}
        </main>
    )
}

export default MyTopics