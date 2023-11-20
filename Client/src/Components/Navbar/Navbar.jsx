import React, { useEffect } from 'react'
import './Navbar.css'
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { currentUser } from '../../Action/CurrentUser';
import decode from "jwt-decode";
function Navbar({ handleSlideIn }) {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.currentUserReducer)


  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" })
    alert('You have logout Successfully')
    localStorage.removeItem('Profile')
    navigate('/')
    dispatch(currentUser(null))
  }

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodeToken = decode(token);
      if (decodeToken.exp * 1000 < new Date().getTime()) {
        handleLogOut();
      }

    }

    dispatch(currentUser(JSON.parse(localStorage.getItem("Profile"))))

  }, [user?.token, dispatch]);


  return (
    <>
      <div className="navbar">
        <div className="nav_links">
          <button className="hamburger" onClick={() => handleSlideIn()}>
            <img src="/hamburger.svg" alt="hamburger" width="15" />
          </button>

          <Link to={'/'}>
            <div className="web_log" style={{ cursor: 'pointer' }}>
              <img src="/stackOverflowLogo.png" alt="logo" />
            </div>
          </Link>
          <ul className='Links'>
            <li>About</li>
            <li>Products</li>
            <li>For Teams</li>
          </ul>

          <div className="auth">

            <input type="search" placeholder='Search' id='searchIcon' />
            <img src="search_icon.svg" alt="" />
            {
              user === null ? (
                <Link to={'/user/login'}>
                  <button className="btn">Log in</button>
                </Link>
              ) :
                (
                  <>
                  <Link to={`/user/updateProfile/${user.stackUser._id}`} className='user_first_char'>
                    <span>
                      {user.stackUser.name.charAt(0).toUpperCase()}  </span> </Link>
                    <button className='logout_btn' onClick={handleLogOut}>logout</button>
                  </>
                )
            }
          </div>

        </div>

      </div>

    </>
  )
}

export default Navbar
