//component => JS code with html tags
//certain no of code display in the frontend -> component
import React from "react";

function TestComp1(){

  const styleAttrs={
    backgroundColor:"brown",
    color:"blue"
}
  return(
    <div style={styleAttrs}> {/* Internal */}
    <div style={{backgroundColor:"red"}}>{/*//Here color code is not applicable - Inline */}
      <p>Reiterating Functional Component</p>
    </div>
    </div>
  )
}
// function TestComp() {
//   return (
//     <div>
//       <h1>This is a test Functional Component.</h1>
//       <p>We are learning F.C</p>
//     </div>
//   );
// }
export default TestComp1;

/*
function add(a,b){
    return a+b
}
console.log(add(5,10))
*/

