import "./Account1.css";
import { Link } from "react-router-dom";
const Account1 = () => {
  return (
    <div className="mac-book-air-10bb">
      <div className="image-106bb">
        <span className="create-your-accountbb">CREATE YOUR ACCOUNT</span>
        <span className="email-phonebb">Email&#x2F;Phone</span>
        <input type="text"/>
        <span className="usernamebb">Username</span>
        <input type="text"/>
        <span className="pssbb">Password</span>
        <input  class="p1" type="password"/>
        <span className="cpssbb">Confirm Password</span>
        <input type="text"/>
        <div className="flex-containerbb">
          <input className="ch" type="checkbox"/>
          <span className="terms-conditionsbb">TERMS & CONDITIONS</span>
        </div>
        <a><Link to="/Location"><button className="rectangle-11bb">
          <span className="sign-upbb">SIGN UP</span>
        </button></Link></a>
      </div>
    </div>
  );
};
export default Account1;