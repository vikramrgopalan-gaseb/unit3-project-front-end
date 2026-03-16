// IMPORTS

import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

// CREATE NAVBAR VARIABLE

const NavBar =() => {
    const { user, setUser } = useContext(UserContext)

    // SIGN OUT VARIABLE

    const handleSignOut = () => {
        localStorage.removeItem('token')
        setUser(null)
    }

    return (
        <nav className='nav-bar'>
            {/* universal links */}
            <ul className='universal-link'>
                <li><Link to={'/'}>Homepage</Link></li>
            </ul>
            
            {/* if user exits... */}
            {user ? (
                <ul className='user-links'>
                    <li><Link to={'/classes/create-class'}>Create New Class</Link></li>
                    <li><Link to={'/classes/my-classes'}>My Classes</Link></li>
                    <li><Link to={'/topics/create-topic'}>Create New Topic</Link></li>
                    <li><Link to={'/topics/my-topics'}>My Topics</Link></li>
                    <li><Link to={'/'} onClick={handleSignOut}>Sign out</Link></li>
                </ul>
            // ... else ...
            ) : (
                <ul className='auth-links'>
                    <li><Link to={'/sign-in'}>Sign In</Link></li>
                    <li><Link to={'/sign-up'}>Sign Up</Link></li>
                </ul>
            )
            }
        </nav>
    )
}

export default NavBar