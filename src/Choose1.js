import "./Choose1.css";
// import react from './react'
import {Link} from 'react-router-dom'

const Choose1 = () => {
    return(
        <>
        <div className="body1">
        <div className="headch">
            <h1>CHOOSE</h1>
        </div>
        <div className="choose">
        <a><Link to="/Kr1">
        <div className="foodb">
            <img className="food" />
            <br></br>
            <h3>FOOD</h3>
        </div>
        </Link></a>
        <div className="clothingb">
            <img className="clothing"/>
            <br></br>
            <h3>CLOTHING</h3>
        </div>
        <div className="groceriesb">
            <img className="groceries"/>
            <br></br>
            <h3>Groceries</h3>
        </div>
        <div className="fvb">
            <img className="fv" />
            <br></br>
            <h3>FRUITS AND VEGETABLES</h3>
        </div>
        <div className="footb">
            <img className="foot"/>
            <br></br>
            <h3>FOOTWEARS</h3>
        </div>
        <div className="accessb">
            <img className="access" />
            <br></br>
            <h3>ACCESSORIES</h3>
        </div>
        </div>
        </div></>
    );
}
export default Choose1;
