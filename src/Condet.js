import "./Condet.css";
import { Link } from "react-router-dom";
const Condet = () => {
  return (
    <div className="mac-book-air-42cc">
      <div className="image-106cc">
        <span className="contact-detailscc">CONTACT DETAILS</span>
        <span className="client-namecc">Client Name</span>
        <input className="cn" type="text"/>
        <span className="companycc">Company</span>
       
     
        <input className="rectangle-10-1cc" type="text" />
        <span className="categorycc">Category</span>

        <input className="ct" type="text"/>
        <span className="phn-nocc">Phone Number</span>
        <input className="rectangle-11cc" placeholder="91+" type="tel" />
        <span className="emailcc">Email</span>
        <input className="rectangle-12cc" type="text" />
        {/* <div className="flex-containercc">
           <button className="group-1cc"> 
            <button className="rectangle-14cc">BACK
               <div className="backcc">Back</div> 
            </button>
          </button> 
          <button className="rectangle-13cc">Next</button>
        </div>  */}
        <a><Link to="/Account">
        <div className="bck">
            <p className="bckwri">Back</p>
        </div>
        </Link></a>
        <a><Link to="/Shop">
        <div className="nxt">
            <p className="nxtwri">Next</p>
        </div></Link></a>
      </div>
    </div>
  );
};
export default Condet;