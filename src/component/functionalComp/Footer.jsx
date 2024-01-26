import "../../css/Footer.css"
import React from "react";
const Footer =() => {
    return(
        <div className="Container" style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",textAlign:"center"}}>
           
       {/*} <h1 style={{color:"red",textAlign:"center"}}>Footer</h1>*/}
        <br /><br /><br />
        <p>ADDRESS:<span>43,SK street,Hosur</span></p>
        <p>EMAIL ID:<span>sasijagan03@gmail.com</span></p>
        <p>MOBILE NUMBER:<span>6385285493</span></p>
        </div>
    )
}
export default Footer;