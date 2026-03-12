import { useEffect, useState } from 'react';
import { homeData } from '../../services/homeServices';

const HomePage = () => {

    // Store the data in arrays once it arrives from the backend

    const [topics, setTopics] = useState([]);
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {

            try {
                // Call from servies

                const data = await homeData(); 
                
                // Update arrays with the results

                setTopics(data.topics);
                setClasses(data.classes);

            } catch (err) {
                console.error('Failed to load dashboard:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    });

    if (loading) return <p>Loading classes and topics...</p>;

    return (
        <main>
            <h1>APPcepted</h1>

            <section>
                <h2>Classes</h2>
                {classes.map((c) => (
                    <div key={c._id} className="card">
                        <h3>{c.name}</h3>
                        <p>Originator: {t.author?.username}</p>
                    </div>
                ))}
            </section>

            <section>
                <h2>Topics</h2>
                {topics.map((t) => (
                    <div key={t._id} className="card">
                        <h3>{t.title}</h3>
                        <p>{t.description}</p>
                        <small>Requested by: {t.author?.username}</small>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default HomePage;
