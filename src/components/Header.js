import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  useEffect(() => {
    const user = auth.currentUser;

    if (!user) {} 
  }, [user,auth]);

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">JoGeek</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/videos">Videos</Link>
        {user && <Link to="/create">Upload</Link>}
        {user ? (
          <Link onClick={logout}>Logout</Link>
        ) : (
          <Link to="/login">SignIn</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
