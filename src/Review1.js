import { Link } from "react-router-dom";
import "./Review1.css";
function Review1(){
    return(
        <>
        <div className="aaaa">
        <div className="comments">

            <div className="com1s">
                <h2>COMMENTS</h2>
            </div>
            <div className="leavecoms">
                <form>
                <textarea rows="30" cols="60" placeholder="Leave your Comments"></textarea> 
                </form>
            </div>
            <a><Link to="Kr1user">
            <div className="revsubmits">
                <div className="revsubmitwris">
                    <h3>SUBMIT</h3>
                </div>
            </div> </Link></a>      
             </div>
          <div className="pubreviews">
            <div className="pubrevs">
                <h1>PUBLIC REVIEW</h1>
            </div>
          <div className="pubrevstrs">
                <div className="pubrevrats">
                 <h3>4</h3></div>
                 <div className="prstrimgs">
                    <img className="prstr1s"/>
                    <img className="prstr2s"/>
                    <img className="prstr3s"/>
                    <img className="prstr4s"/>
                </div>
            </div>
            <div className="pubcommentss">
                <div className="pubcom1s">
                    <h5>   Here people can delve deep into delicious meals, and order fully
                cooked grilled chicken</h5>
                </div>
                <div className="pubcom2s">
                    <h5>Good relaxing break! Friendly, welcoming staff. Very good location for city centre and local transport. Overall an enjoyable stay.</h5>
                </div> 
                <div className="pubcom3s">
                    <h5>Lovely hotel in an excellent location. Rooms are spotless & cleaned daily, breakfast is plentiful</h5>
                </div>
                <div className="pubcom4s">
                    <h5>   Dishes were delicious and I liked all the dishes i ordered.
                  Chicken tikka, grill chicken</h5>
                </div>
                <div className="pubcom5s">
                    <h5>Family hotel.Very Good inner environment.Tastes good.Don't miss it.If you miss,you will feel.</h5>
                </div>
                <div className="pubcom6s">
                    <h5>  Good place to relax and food tastes good</h5>
                </div>  
            </div>
            </div>  
</div>

        </>
    );
}
export default Review1;
