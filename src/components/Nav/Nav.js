import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
import { FaSearch, FaBell } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import ProfileIcon from "./profile.jpg";
import { useState } from "react";

const Nav = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.firstHalf}>
        <img
          className={styles.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="icon"
        />
        <div className={styles.navMenu}>
          <NavLink activeClassName={styles.active} exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName={styles.active} to="tv-shows">
            TV Shows
          </NavLink>
          <NavLink activeClassName={styles.active} to="movies">
            Movies
          </NavLink>
          <NavLink activeClassName={styles.active} to="new">
            New & Popular
          </NavLink>
          <NavLink activeClassName={styles.active} to="my-list">
            My List
          </NavLink>
        </div>
      </div>
      <div className={styles.profileNav}>
        {searchOpen && (
          <input type="text" placeholder="Titles, people, genres" />
        )}
        <FaSearch
          className={styles.search}
          onClick={() => setSearchOpen((searchOpen) => !searchOpen)}
        />
        <FaBell className={styles.bell} />
        <img className={styles.profile} src={ProfileIcon} alt="profile" />
        <MdArrowDropDown className={styles.arrow} />
      </div>
    </nav>
  );
};

export default Nav;
