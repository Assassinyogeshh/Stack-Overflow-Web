import React from 'react'
import './LeftSideBar.css'
import { Link, useLocation } from 'react-router-dom';
function LeftSideBar({ slideIn, handleSlideIn }) {

  const location = useLocation();

  const slideInStyle = {
    transform: "translateX(0%)",


  };

  const slideOutStyle = {
    transform: "translateX(-100%)",

  };

  return (
    <>
      <div className="left_container_side" style={slideIn ? slideInStyle : slideOutStyle}>
        <ul className="left_side_list">
          <li onClick={() => handleSlideIn()}>
            <Link to={'/'} className={`remove_left_link_style ${location.pathname === '/' ? 'active' : ''}`}>
              <p>Home</p>
            </Link>
          </li>
        </ul>

        <span className='Public_Span'>Public</span>
        <ul className="public_lists">
          <li onClick={() => handleSlideIn()}>
            <div className="Question_with_img">
              <img src="/Question_Side_img.svg" alt="" />
              <Link
                className={`remove_left_link_style adjust_img ${location.pathname === '/Questions/fetchAllQuestions' ? 'active' : ''}`}
                to={`/Questions/fetchAllQuestions`}
              >
                <p>Questions</p>
              </Link>
            </div>
          </li>
          <li onClick={() => handleSlideIn()}>
            <Link
              className={`remove_left_link_style ${location.pathname === '/Tags' ? 'active' : ''}`}
              to={'/Tags'}
            >
              <p>Tags</p>
            </Link>
          </li>
          <li onClick={() => handleSlideIn()}>
            <Link
              className={`remove_left_link_style ${location.pathname === '/user/getAllUsers' ? 'active' : ''}`}
              to={'/user/getAllUsers'}
            >
              <p>Users</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LeftSideBar
