const Achievement=()=>{
    return(
        <div>
            <br />
            <h2>Achievements</h2>
           
            <p>
                •School II in my Higher Secondary Examination. 
                <br /><br />
                •Academic Excellence Award during the year 2021-2022.
                <br />
            </p>
       
        </div>
    )
}
export default Achievement;

// import { useReducer } from "react";
// const value={count:0}
// function countFunction(state,action){
//     switch (action.type) {
//         case "sub":
//             return {count:state.count-1}
//         case "add":
//             return {count:state.count+1}
//         case "reset":
//             return {count:value.count}
//         default:
//             return {count:value.count}
// }
// }
// const mode =()=>{
//     const [countVal,updateCount]=useReducer(countFunction,value);
//     return (
//         <div>
//            <h1> This is useReducer example</h1>
//            <h2>Count:{countVal.count}</h2>
//            <button onClick={()=>updateCount({type:"add"})}>Add</button>
//            <button  onClick={()=>updateCount({type:"sub"})}>Sub</button>
//            <button onClick={()=>updateCount({type:"reset"})}>Reset</button>
//         </div>
//     )

// }
