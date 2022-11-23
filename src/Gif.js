import "./Gif.css";
//import macBookAir1 from "./assets/macBookAir1.svg";
import { Link } from "react-router-dom";
const Gif = () => {
  return (<>
    <div className="mac-book-air-1">
        <img className="Gife" /><br/><br/><br/><br/>
        <a><Link to="/Wru"><button type="submit"></button></Link></a>
    </div>
    </>
  );
};
export default Gif;