import "./Location.css";
import {Link} from "react-router-dom";
function Location()
{
    return(
        <>
        <div className="body">
            <div className="loa1"><br/><br/>
                <h1>PLEASE DO ENTER YOUR LOCATION:</h1>
                <form>
                    <input type="text" /><br/><br/>
                    <a><Link to="/Chooseu">
                    <button variant="text">Submit</button><br/><br/>
                    </Link></a>
                </form>
            </div>
            <div className="image-1"/>
        </div>
      </>
    )
};
export default Location;