import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div class="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby mlkshk cronut narwhal, gastropub slow-carb scenester
            church-key williamsburg beard snackwave. Ennui enamel pin
            gluten-free retro, small batch banh mi af before they sold out
            mumblecore taiyaki pabst. Photo booth offal hella bespoke 3 wolf
            moon. Schlitz dreamcatcher kombucha, organic tumblr beard jianbing
            actually venmo fixie lo-fi taxidermy kinfolk.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
