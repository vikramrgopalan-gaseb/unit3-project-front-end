import { useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { upvoteTopic, downvoteTopic } from "../../services/homeServices";

const EditUserTopic = (props) => {
    const { selectedTopic, setSelectedTopic, topics, fetchTopicList } = props;
    const { user } = useContext(UserContext);

    useEffect(() => {
        if(!selectedTopic._id || !topics.length) {
            return
        }
        const updatedSelectedTopic = topics.find((foundTopic) => foundTopic._id === selectedTopic._id)
        if(updatedSelectedTopic) {
            setSelectedTopic(updatedSelectedTopic)
        }
    }, [topics])

    const handleUpvote = async () => {
        if (!user) return alert("You must be logged in to vote!");
        try {
            await upvoteTopic(user, selectedTopic._id);
            fetchTopicList();
        } catch (err) {
            console.error("Upvote failed", err);
        }
    };

    const handleDownvote = async () => {
        if (!user) return alert("You must be logged in to vote!");
        try {
            await downvoteTopic(user, selectedTopic._id);
            fetchTopicList();
        } catch (err) {
            console.error("Downvote failed", err);
        }
    };

    return (
        <main className="topic-user-page">
            <h2>{selectedTopic?.title}</h2>
            <p>{selectedTopic?.description}</p>
            
            <div className="voting-section">
                <p>Upvotes: {selectedTopic.upvotes.length || 0}</p>
                <button onClick={handleUpvote}
                disabled={!user}
                title={!user ? "Please sign in to vote" : ""}
                >Upvote</button>
            </div>

            <div className="voting-section">
                <p>Downvotes: {selectedTopic.downvotes.length || 0}</p>
                <button onClick={handleDownvote}
                disabled={!user}
                title={!user ? "Please sign in to vote" : ""}
                >Downvote</button>
            </div>
        </main>
    );
};

export default EditUserTopic