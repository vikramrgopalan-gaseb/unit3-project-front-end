import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const NavBar =() => {
    const { user, setUser } = useContext(UserContext)

    return (
        <nav>
            {/* universal links */}
            <ul>
                <li><Link to={'/'}>Homepage</Link></li>
            </ul>
            
            {/* if user exits... */}
            {user ? (
                <ul>
                    <li><Link to={'/classes/create-class'}>Create New Class</Link></li>
                    <li><Link to={'/classes/my-classes'}>My Classes</Link></li>
                    <li><Link to={'/topics/my-topics'}>My Topics</Link></li>
                </ul>
            // ... else ...
            ) : (
                <ul>
                    <li><Link to={'/sign-up'}>Sign Up</Link></li>
                </ul>
            )
            // ... else ...
            (
                <ul>
                    <li><Link to={'/sign-in'}>Sign In</Link></li>
                </ul>
            )
            }
        </nav>
    )
}

export default NavBar