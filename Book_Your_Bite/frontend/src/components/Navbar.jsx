import React, { useState } from "react";
import api from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const data = api.data[0]; // ✅ extract actual array content

  return (
    <>
      <nav>
        <div className="logo">BookYourBite</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data.navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn">MENU</button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
