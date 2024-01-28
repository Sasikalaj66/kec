
import "../../css/NavBar.css" //This type of import for CSS file
 
import { Link } from "react-router-dom";
const NavBar = () => {
    return( //Here instead of nav tag we shall use ol,ul tags also
        <ol>
            <li><Link to = "/"class="Link">Home</Link></li>
            <li><Link to = "/about" class="Link">About</Link></li>
            <li><Link to = "/achievement" class="Link">Achievement</Link></li>
            <li><Link to = "/contact" class="Link">Contact</Link></li>
            <li><Link to = "/login" class="Link">Login</Link></li>
            <li><Link to = "/signup" class="Link">Signup</Link></li>
            <li><Link to = "/ref" class="Link">Reference</Link></li>
        </ol>

    )

}
export default NavBar;