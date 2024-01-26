import { useState } from "react";
const About=()=>{
    const [college,updateCollege]=useState("KEC")
    const updatingClg=()=>{
        updateCollege("Sasi")
    }
    return(
        <div>
            <br />
            <h2>Welcome to {college}</h2>
            <button onDoubleClick={updatingClg}>Update College Name</button>
        </div>
    )
}
export default About;