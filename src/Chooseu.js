import "./Chooseu.css";
// import react from './react'
import {Link} from 'react-router-dom'

const Chooseu = () => {
    return(
        <>
        <div className="body1a">
        <div className="headcha">
            <h1>CHOOSE</h1>
        </div>
        <div className="choosea">
        <div className="foodba">
            <img className="fooda" />
            <br></br>
            <h3>FOOD</h3>
        </div>
        <a><Link to="/Food">
        <div className="clothingba">
            <img className="clothinga"/>
            <br></br>
            <h3>CLOTHING</h3>
        </div>
        </Link></a>
        <div className="groceriesba">
            <img className="groceriesa"/>
            <br></br>
            <h3>Groceries</h3>
        </div>
        <div className="fvba">
            <img className="fva" />
            <br></br>
            <h3>FRUITS AND VEGETABLES</h3>
        </div>
        <div className="footba">
            <img className="foota"/>
            <br></br>
            <h3>FOOTWEARS</h3>
        </div>
        <div className="accessba">
            <img className="accessa" />
            <br></br>
            <h3>ACCESSORIES</h3>
        </div>
        </div>
        </div></>
    );
}
export default Chooseu;
