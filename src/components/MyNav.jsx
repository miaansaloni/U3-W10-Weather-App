import { Search, Heart, Gear } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const myNav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a href="#home">
            <img
              src="https://cdn0.iconfinder.com/data/icons/pug/512/pug_dog_sticker_emoji_emoticon_rain_umbrella-512.png"
              alt="Loading"
              width={"30px"}
            />
          </a>
        </li>
        <li>
          <NavLink to="/" activeClassName="active">
            <Search />
          </NavLink>
        </li>
        <li>
          <a href="#favorites">
            <Heart />
          </a>
        </li>
        <li>
          <a href="#settings">
            <Gear />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default myNav;
