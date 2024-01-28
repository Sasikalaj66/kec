

import React from "react";
import "../../css/Footer.css"

function Footer() {
  return (
    <div className="main-footer" >
      <div className="container" >
        <div className="row"  style={{display:"flex",justifyContent:"space-evenly"}}>
          {/* Column1 */}
          <div className="col" >
            <h4>ADDRESS</h4>
            <ul className="none">
              <li>43,SK,Street,Hosur</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col" >
            <h4>EMAIL ID</h4>
            <ul className="list-unstyled">
              <li>sasijagan03@gmail.com</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col" >
            <h4>MOBILE NUMBER</h4>
            <ul className="list-unstyled">
              <li>6385285493</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="col" >
          <p className="col-sm" style={{background:"hotpink", color:"black"}}>
            &copy;2024 All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;