import "../../css/LoginAndSignup.css"
const Signup=()=>{
    return(
        <div>
            <h1>Sign up Page</h1>
            <label>FirstName:</label><br />
            <input type="text" name="name" required></input><br></br><br></br>
            <label>LastName:</label><br />
            <input type="text" name="name" required></input><br></br><br></br>
            <label>EmailId:</label><br />
            <input type="text" name="email" required></input><br></br><br></br>
            <label>Password:</label><br />
            <input type="text" name="password" required></input><br></br><br></br>
            <label>Confirm Password:</label><br />
            <input type="text" name="password" required></input><br></br><br></br>
            <input type="button" name="button" value ="Signup" required></input>
        
        </div>
    )
}
export default Signup;