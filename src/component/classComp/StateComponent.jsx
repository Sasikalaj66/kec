import React from "react";
class StateComponent extends React.Component{
    constructor(){
        super()
        this.state={ 
            name:"SASIKALA",
            course:"MERN"
        }
    }
// Here we should use arrow function inside the class component instead of function
    ChangeState =()=>{
        console.log("Kongu Engg College") // Use State should be used
    }
    render(){
        return(
            <div>
                <h1>This is state component </h1>
                <h3>Hello,{this.state.name} <br></br>This is {this.state.course} class</h3>
                <h4>I am changing the state of this {this.state.name} to {this.ChangeState()}</h4>
               {/* <button onClick={this.ChangeState}>Click me to change the state.</button> */}
                <button onMouseOver={this.ChangeState}>Click me to change the state.</button>
            </div>
        )
    }
}
export default StateComponent