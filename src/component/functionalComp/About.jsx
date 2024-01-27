/*import { useState } from "react";
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
export default About;*/

//USEEFFECT:
//Example....Affect from cold
import { useEffect, useState } from "react";
const About = () => {
    const [tabName, setTabName] = useState("Welcome to cold club take this table Citricin and cure it")
    const updateTablet = () => {
        setTabName("You don't have any disease,don't take this pills to avoid side effects")
    }
    const updateTablet1 = () => {
        setTabName("Welcome to fever club take this table DOLO and cure it")
    }
    const updateTablet2 = () => {
        setTabName("Welcome to seizure club take this table levipill and cure it")
    }
    //console.log("ABC") // No need this
    useEffect(()=>{
        fetch(`"https://jsonplaceholder.typicode.com/ ${tabName}"`) //Inside the double quotes called API(Backend)
        .then(response => response.json())
        .then(json => console.log(json))
    },[tabName])
   //tabName is meant for counting that statement many times in single click
return (
    <div>
        <br />
        <h2>{tabName}</h2>
        <button onClick={updateTablet}>Click me if you get cold</button>
        <button onClick={updateTablet1}>Click me if you get fever</button>
        <button onClick={updateTablet2}>Click me if you get seizure</button>
    </div>
)
}
export default About;


