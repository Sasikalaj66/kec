
import "../../css/NavBar.css" //This type of import for CSS file
 
import { Link } from "react-router-dom";
const NavBar = () => {
    return( //Here instead of nav tag we shall use ol,ul tags also
        <ul>
            <li><Link to = "/"class="Link">Home</Link></li>
            <li><Link to = "/about" class="Link">About</Link></li>
            <li><Link to = "/achievement" class="Link">Achievement</Link></li>
            <li><Link to = "/contact" class="Link">Contact</Link></li>
            <li><Link to = "/login" class="Link">Login</Link></li>
            <li><Link to = "/signup" class="Link">Signup</Link></li>
            <li><Link to = "/ref" class="Link">Reference</Link></li>
            <li><Link to = "/memo" class="Link">Memo</Link></li>
            <li><Link to = "/callback" class="Link">Callback</Link></li>
        </ul>

    )

}
export default NavBar;