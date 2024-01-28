

import React, { useMemo, useState } from "react";
const  Memo = ()=>{
    const [number,updateNumber]=useState(0)
    const [dark,updateTheme]=useState(false )  //keep bollean or numerical value
    //For triggering//
    function doubleNumberSlow(num){
        console.log("it is calling")
        for(let i=0;i<10000;i++){}
        return num*2;
    }
    const doubleNumber=useMemo(()=>{
       return doubleNumberSlow(number)
    },[number])
    console.log(doubleNumber)
    const theme=useMemo(()=>{
        return{
        backgroundColor:dark?"black":"yellow",
        color:dark?"yellow":"black"
    }
    },[dark])     
    return(
        <div>
            <h1 style={{color:"red"}}>Thi is a Dangerous hook which is called useMemo</h1>
            <input type="number" value={number} onChange={(event)=>updateNumber(event.target.value)}/>
            <button onClick={()=>{updateTheme(dark => !dark)}}>change theme</button>
            <h2 style={theme}>The doubled number is {doubleNumber}</h2>
        </div>
    )
}
export default Memo;

//Perform the task one time -> onClick