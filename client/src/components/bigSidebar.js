import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./nav-links";
import Logo from "./logo";
import { useAppContext } from "../context/appContext";

const BigSideBar = () => {
  const { showSidebar } = useAppContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;
