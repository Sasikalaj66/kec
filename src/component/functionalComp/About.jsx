
//USESTATE
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
/*import { useEffect, useState } from "react";
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
*/

const About=()=>{
    return(
        <div>
            <br />
            <h2>CARRIER OBJECTIVE</h2>
        <p>Aspiring to take responsibilities , regardless of the challenges , to achieve the set goal for the organization and seeks growth 
            on career from learning , explore new dimensions and to refine my capabilities from the new exposure of the organization.</p>
            <h2>ACADEMIC PROFILE</h2>
        <p>
            •Pursuing B.E in Electronics and Communication Engineering at 
             Kongu Engineering College,Perundurai,with a CGPA of 8.79 till IV Semester.  
         <br />
            •93.6% - HSC - Government Model Higher Secondary School. 
           <br />
            •89.6% - SSLC – Government Higher Secondary School.  
            <br />
        </p>
        <h2>IN-PLANT TRAINING</h2>
        <p>
            “SWELECT POWER SYSTEM LIMITED” in Idappadi on August 2022 (3 days)
        </p>
        <h3>Paper 1</h3>
            <p>Paper on “Power Generation from Dance Floor” in SPAVE – 2K22 at Kongu Engineering College.</p>
       
        <h3>Paper 2</h3>
            <p>Paper on “Eye Directive Wheelchair” in SRISHTI 2K22 at PSG college of Technology , Coimbatore.</p>
       
        <h3>Paper 2</h3>
            <p>Paper on “Effect of Hydrogen addition on diesel Engine” in MECHANICA 2K22 at IIT , Chennai.</p>
        </div>
    )
}
export default About;


