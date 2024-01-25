
import "../../css/NavBar.css" //This type of import for CSS file 
import { Link } from "react-router-dom";
const NavBar = () => {
    return( //Here instead of nav tag we shall use ol,ul tags also
        <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/about">About</Link></li>
            <li><Link to = "/achievement">Achievement</Link></li>
            <li><Link to = "contact">Contact</Link></li>
        </ul>

    )

}
export default NavBar;