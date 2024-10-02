import { Search } from "react-bootstrap-icons";
import { Heart } from "react-bootstrap-icons";
import { Gear } from "react-bootstrap-icons";

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
          <a href="#search">
            <Search />
          </a>
        </li>
        <li>
          <a href="#favorites">
            <Heart />
          </a>
        </li>
        <li>
          <a href="#contact">
            <Gear />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default myNav;
