import "./Wru.css";
import {Link} from "react-router-dom";
function Wru(){
    return(
        <>
        <div className="Wru1"><br></br><br></br><br></br><br></br>
            <a className="a1"><Link to="/Login1">
        <button className="vendor">
            <img className="venimg"/>
            <div clasNname="venwri">
                <h2>VENDOR</h2>
            </div>
        </button></Link></a>
        <br/>
        <a className="a1"><Link to="/Login2">
        <button className="user">
            <img className="userimg"/>
            <div className="userwri">
                <h2>USER</h2>
            </div>
        </button></Link></a>
        </div>
        </>
    );
}
export default Wru;
