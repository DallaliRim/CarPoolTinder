import { NavLink } from "react-router-dom";
import "./home.css";

function Home() {
    return (
        <div className="home">
            <p> <li><NavLink className="navlink" to="/create-account">Create Accounts</NavLink></li> </p>
        </div>
    );
}

export default Home;
