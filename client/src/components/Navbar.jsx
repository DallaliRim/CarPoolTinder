import { useEffect, useState } from 'react';
import './navbar.css';
import { MdOutlineHome } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [scrollTop, setScrollTop] = useState(50);
  const [classname, setClassname] = useState("nav");

  useEffect(() => {
    if (scrollTop > 50) {
      setClassname("nav affix");
    } else {
      setClassname("nav");
    }
  }, [scrollTop]);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <nav className={classname}>
      <div className="container">
        <div className="logo">
          <a href="./">
            <MdOutlineHome />
          </a>
        </div>
        <div className="spacer" />
        <div className="main_list">
          <ul className="navlinks">
            <li><NavLink className="navlink" to="/">Home</NavLink></li>
            <li><NavLink className="navlink" to="/profile">Profile</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
