import "./Kr1user.css";
import {Link} from 'react-router-dom'
function Kr1user(){
    return(
        <>
        <div className="body2g">
        <div className="krhibg">
            <img className="krhig" />
        </div>
        <div className="krdebg">
            <img className="kri1g" />
            <img className="kri2g" />
            <img className="kri3g " />
            <div className="krheadg">
            <h1>ZEUS COLLECTIONS</h1></div>
            <div className="ratingg">
                <div className="ratig">
                 <h3>4</h3></div>
                 <div className="strimgg">
                    <img className="str1g"/>
                    <img className="str2g"/>
                    <img className="str3g"/>
                    <img className="str4g"/>
                </div>
            </div>
            <div className="opclg">
        <h3>open.closes 23.00</h3></div>
        <div className="addg">
            <div className="addressg">
                <p>ADDRESS:<br></br>4696/B,KUNIYAMUTHUR,WEST STREET,PK PUDUR,COIMBATORE.
                </p>
                <p>PHONE NUMBER:9498125917</p>
            </div>
            <a><Link to="/Showuser">
            <div className="reviewg">
                <div className="reviewwrig">
                    <h3>VIEW MORE</h3>
                </div>
            </div></Link></a>
        </div>
        <a><Link to="/Review1">
        <div className="submitg">
            <div className="submitwrig">
                <h3>REVIEW</h3>
            </div>
        </div></Link></a>
        <a><Link to="/Recruit">
        <div className="recruitg">
            <div className="recruitwrig">
                <h3>RECRUIT</h3>
            </div>
        </div></Link></a>
        </div>
        </div>
        </>
    );
}
export default Kr1user;
