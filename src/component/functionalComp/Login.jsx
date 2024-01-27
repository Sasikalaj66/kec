const Login=()=>{
    return(
        <div className="logincontainer">
            <h1>Login Page</h1>
            <br />
            <div className="input-container">
            <label>UserName</label>
            <br /><br />
            <input type="text" name="name" placeholder="Username" />
            <br /><br />
            <label>Password</label>
            <br /><br />
            <input type="text" name="pass" placeholder="Password"/>
            <br /><br />
            <a href="#" class="Link">Forget Password?</a>
            <br /><br />
            <button>Login</button>
            </div>
        </div>
       
    )
}
export default Login; 


