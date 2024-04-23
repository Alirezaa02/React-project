// navigation links
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/volcanoList">VolcanoList</Link></li>
      </ul>
    </nav>
  );
}
