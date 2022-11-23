import "./Edit.css";
import {Link} from "react-router-dom";
function Edit()
{
    return(
        <>
        <body>
        </body>
        <div className="Edit">
            <img className="Editimg"/>
        </div>
        <div className="Editimg1">
            <img className="Editimg2" />
        </div>
        <div className="edit">
        <div className="edittop">
            <img className="editimg1"/>
        </div>
        <div className="editpro">
            <div className="editpro1">
            <img className="editproimg"/>
            <a><Link to="Condet">
            <div className="editwri">
                <h3>Edit Profie</h3>
            </div></Link></a>
            </div>
        </div>
        <div className="editcon">
            <div className="editcon1">
            <img className="editconimg"/>
            <a><Link to="#">
            <div className="editconwri">
                <h3>Edit content</h3>
                </div>
                </Link></a>
            </div>
        </div>
        {/* <div className="customize">
            <img className="customimg"/>
            <div className="customwri">
                <h3>Customize</h3>
            </div>
        </div> */}
        <div className="Logout">
            <div className="Logout1">
            <img className="Logoutimg"/>
            <a><Link to="/Login1">
            <div className="Logoutwri"> 
            <h3>Logout</h3>
            </div></Link></a>
            </div>
        </div>
        </div>
        </>
    );
}
export default Edit;
