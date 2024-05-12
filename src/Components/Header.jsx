import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getToken, deleteToken } from './authentication'

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists and update login state
    const token = getToken();
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    deleteToken();  // Remove token from storage
    setIsLoggedIn(false);  // Update state
    navigate('/');  // Redirect to login page
  };


    return (
        <header>
          <div className="icon">
            <img src="img/icon.png" alt="Icon" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
              {isLoggedIn ? (
                  <>
                    {/* If logged in, show the VolcanoList link and a logout option */}
                    <li>
                      <Link to="/VolcanoList">VolcanoList</Link>
                    </li>
                    <li>
                      <a onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</a>
                    </li>
                  </>
              ) : (
                  <>
                    {/* If not logged in, show a login link */}
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </>
              )}
            </ul>
          </nav>
        </header>
    );

}

export default Header;
