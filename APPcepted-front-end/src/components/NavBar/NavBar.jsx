import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const NavBar =() => {
    const { user, setUser } = useContext(UserContext)

    return (
        <nav>
            {/* universal links */}
            <ul>
                <li></li>
            </ul>
            
            {/* if user exits... */}
            {user ? (
                <ul>
                    <li></li>
                </ul>
            // ... else ...
            ) : (
                <ul>
                    <li><Link to={'/sign-up'}>Sign Up</Link></li>
                </ul>
            )}
        </nav>
    )
}

export default NavBar