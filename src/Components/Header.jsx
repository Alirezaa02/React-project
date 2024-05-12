import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ isLoggedIn, onLogout }) => {
  const location = useLocation();

  const renderAuthButton = () => {
    if (isLoggedIn) {
      return <button onClick={onLogout}>Logout</button>;
    } else {
      return <Link to="/Login">Login</Link>;
    }
  };
  

  const renderBackButton = () => {
    if (location.pathname.startsWith("/volcano/")) {
      return <Link to="/VolcanoList">VolcanoList</Link>;
    }
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
          {/* <li>
            <Link to="/VolcanoList">VolcanoList</Link>
          </li> */}
          <li>
            <Link to="/Register">Register</Link>
          </li>
          {!isLoggedIn && (
            <li>
              {renderAuthButton()}
            </li>
          )}
          <li>{renderBackButton()}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
