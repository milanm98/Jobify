import { FaHome } from "react-icons/fa";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Navbar";
import { useAppContext } from "../context/appContext";
import Logo from "./logo";

const NavBar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-btn"
          type="button"
          onClick={() => console.log("toggle-sidebar")}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="dashboard">dashboard</h3>
        </div>
        <div className="btn-container">
          <button className="btn" type="button">
            <FaUserCircle />
            milan
            <FaCaretDown />
          </button>
          <div className="dropdown show-dropdown">
            <button type="button" className="dropdown-btn">
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
