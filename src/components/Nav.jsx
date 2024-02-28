import React from "react";
import bell from "../assets/bell.png";
import avatar from "../assets/avatar.png";
import settings from "../assets/settings.png";
import mode from "../assets/mode.png";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-right">
        <li>
          <img src={mode} alt="freepik icon" />
        </li>
        <li>
          <img src={bell} alt="freepik icon" />
        </li>
        <li>
          <img src={avatar} alt="freepik icon" />
        </li>
        <li>
          <img src={settings} alt="freepik icon" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
