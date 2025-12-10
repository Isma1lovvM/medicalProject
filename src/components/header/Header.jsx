import "./header.css";
import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <div className="container">
          <nav className="navbar">
            <NavLink className={"isActive"} to={"/"}>
              <h1 className="logo_text">
                E - <span className="nav_logo_span">sheba</span>
              </h1>
            </NavLink>
            <ul className="nav_list">
              <li className="nav_item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "nav_item"
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "nav_item"
                  }
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li className="nav_item">Application</li>
              <li className="nav_item">History</li>
            </ul>
            <ul className="nav_btns_list">
              <button className="login_btn">Log in</button>
              <button className="signup_btn">Sign up</button>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
