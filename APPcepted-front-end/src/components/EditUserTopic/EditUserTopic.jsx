import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { upvoteTopic, downvoteTopic } from "../../services/homeServices";

const EditUserTopic = (props) => {
    const { selectedTopic, fetchTopicList } = props;
    const { user } = useContext(UserContext);

    const handleUpvote = async () => {
        try {
            await upvoteTopic(selectedTopic._id);
            fetchTopicList();
        } catch (err) {
            console.error("Upvote failed", err);
        }
    };

    const handleDownvote = async () => {
        try {
            await downvoteTopic(selectedTopic._id);
            fetchTopicList(); // Refresh the parent's list
        } catch (err) {
            console.error("Downvote failed", err);
        }
    };

    return (
        <main>
            <h2>{selectedTopic?.title}</h2>
            <p>{selectedTopic?.description}</p>
            
            <div>
                <p>Upvotes: {selectedTopic?.upvotes?.length || 0}</p>
                <button onClick={handleUpvote}>Upvote</button>
            </div>

            <div>
                <p>Downvotes: {selectedTopic?.downvotes?.length || 0}</p>
                <button onClick={handleDownvote}>Downvote</button>
            </div>
        </main>
    );
};

export default EditUserTopic