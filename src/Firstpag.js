import "./Firstpage.css";
import {Link} from 'react-router-dom'
// import image103 from "./assets/image103.png";
// import image55 from "./assets/image55.png";
// import image54 from "./assets/image54.png";
// import image51 from "./assets/image51.png";
// import image53 from "./assets/image53.png";
const Firstpage= () => {
  return (
    <div className="first1">
      <div className="firstimg1">
        <img className="firstimg2"  />
        <div className="fircon">
          <span className="food"> FOOD</span>
          <a><Link to="/Recruit">
          <div className="firrec1">
            <img className="firimg3"  />
            <span className="krk-mess">KRK MESS</span>
          </div></Link></a>
          
          <div className="firrec2">
            <img className="firimg4" />
            <span className="gowrav-hotel">GOWRAV HOTEL</span>
          </div>
        </div>
        <div className="fircon1">
          <div className="firrec3">
            <img className="firimg5"  />
            <span className="homely-food">HOMELY FOOD</span>
          </div>
          <div className="firrec4">
            <img className="firimg6" />
            <span className="kgf-briyani">KGF BRIYANI</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Firstpage;
