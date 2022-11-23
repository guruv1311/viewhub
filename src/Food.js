import { Link } from "react-router-dom";
import "./Food.css";
function Food(){
        return(
            <>
            <div className="neww">
                <div className="headfo">
                    <img className="arr"/>
                    <center><h1>CLOTHING</h1></center>
                    </div>
                    <div className="Food">
                        <a><Link to="/Kr1user">
                    <div className="krkmessb">
                        <img className="krkmess" alt=""/>
                        <br></br>
                        <h3>ZEUS COLLECTIONS</h3>
                    </div></Link></a>
                    <div className="gowravb">
                        <img className="gowrav" alt=""/>
                        <br></br>
                        <h3>MENS FASHION</h3>
                    </div>
                    <div className="homeb">
                        <img className="home"alt="" />
                        <br></br>
                        <h3>QUEENS BOTIQUE</h3>
                    </div>
                    <div className="kgfb">
                        <img className="kgf" />
                        <br></br>
                        <h3>LA FASHION</h3>
                    </div>
                    </div>
                    </div>
            </>
        );
    }
    export default Food;
