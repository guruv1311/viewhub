import "./Kr1.css";
import {Link} from 'react-router-dom'
function Kr1(){
    return(
        <>
        <div className="body2hh">
        <div className="krhibhh">
            <img className="krhihh" />
        </div>
        <div className="krdebhh">
            <a><Link to="/Edit">
            <img className="mehh"/></Link></a>
            <img className="kri1hh" />
            <img className="kri2hh" />
            <img className="kri3hh " />
            <div className="krheadhh">
            <h1>KRK MESS</h1></div>
            <div className="ratinghh">
                <div className="ratihh">
                 <h3>3</h3></div>
                 <div className="strimghh">
                    <img className="str1hh"/>
                    <img className="str2hh"/>
                    <img className="str3hh"/>
                </div>
            </div>
            <div className="opclhh">
        <h3>open.closes 23.00</h3></div>
        <div className="addhh">
            <div className="addresshh">
                <p>ADDRESS:<br></br>4696/B,KUNIYAMUTHUR,WEST STREET,PK PUDUR,COIMBATORE.
                </p>
                <p>PHONE NUMBER:9498125917</p>
            </div>
            <a><Link to="/Showmore">
            <div className="reviewhh">
                <div className="reviewwrihh">
                    <h3>VIEW MORE</h3>
                </div>
            </div></Link></a>
        </div>
        <a><Link to="Reviewve">
        <div className="submithh">
            <div className="submitwrihh">
                <h3>REVIEW</h3>
            </div>
        </div></Link></a>
        </div>
        </div>
        </>
    );
}
export default Kr1;
