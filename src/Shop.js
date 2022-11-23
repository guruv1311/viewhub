import { Link } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="mainxx">
      <div className="image-105xx">
        <span className="shop-detailsxx">SHOP DETAILS</span>
        <span className="shop-addressxx">Shop Address</span>
        <input className="r1xx" type="text"/>
        <span className="shop-addressxx">Street Address</span>
        <input className="r1xx" type="text"/>
        <span className="address-line-2xx">Address Line2</span>
        <input className="r1xx" type="text" />
        <div className="flex-containerxx">
          <span className="cityxx">City</span>
          <span className="state-regionxx">State/Region</span>
        </div>
        <div className="f1xx">
          <input className="r2xx" type="text" />
          <input className="r3xx" type="text" />
        </div>
        <div className="f2xx">
          <span className="postal-zip-codexx">Postal/Zip Code</span>
          <span className="countryxx">Country</span>
        </div>
        <div className="f3xx">
          <input className="r5xxx" type="number" />
          <input className="r4xx" type="text" />
        </div>
        <div className="f4xx">
          <span className="working-hoursxx">Working hours</span>
          <span className="working-daysxx">Working Days</span>
        </div>
        <div className="f5xx">
        <input className="r5xx" type="number"/>
          <input className="r6xx" type="number" />
        </div>
        <a><Link to="/Choose1">
        <button className="r7xx">
          <span className="registerxx">REGISTER</span>
        </button></Link></a>
      </div>
    </div>
  );
};
export default Shop;
