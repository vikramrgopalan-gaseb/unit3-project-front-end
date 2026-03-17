import { useEffect, useState } from 'react';
import { homeData } from '../../services/homeServices';
import { Link } from 'react-router';

const HomePage = (props) => {
    // Store the data in arrays once it arrives from the backend

    const [allUsers, setAllUsers] = useState([]);
    const [topics, setTopics] = useState([]);
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {

            try {
                // Call from servies

                const data = await homeData();

                // Update arrays with the results

                setAllUsers(data.allUsers)
                setTopics(data.topics);
                setClasses(data.classes);

            } catch (err) {
                console.error('Failed to load dashboard:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

    if (loading) return <p>Loading classes and topics...</p>;

    const findOriginator = (aUserId) => {
        const originatorUser = allUsers.find((aUser) => aUser._id === aUserId)
        return (originatorUser.username)
    }

    return (
        <main className='homepage-text'>
            <h1 className='app-title'>APPcepted</h1>
            <div className='classes-and-topics-list'>
                <section className='classes-homepage'>
                    <h2>Classes</h2>
                    {classes.map((aClass) => (
                        <div key={aClass._id} className="card">
                            <h3><Link to={`/classes/homepage/${aClass._id}`} onClick={() => props.setSelectedClass(aClass)}>{aClass.title}</Link></h3>
                            <p>Originator: {findOriginator(aClass.originator)}</p>
                        </div>
                    ))}
                </section>

                <section className='topics-homepage'>
                    <h2>Topics</h2>
                    {topics.map((aTopic) => (
                        <div key={aTopic._id} className="card">
                            <h3><Link to={`/topics/homepage/${aTopic._id}`} onClick={() => props.setSelectedTopic(aTopic)}>{aTopic.title}</Link></h3>
                            <p>{aTopic.description}</p>
                            <p>Requested by: {findOriginator(aTopic.originator)}</p>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default HomePage;
