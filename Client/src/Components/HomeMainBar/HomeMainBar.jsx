import React from 'react'
import './HomeMainBar.css'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import RightSideBar from '../RightSideBar/RightSideBar'
import MiddleMainBar from '../MiddleMainBar/MiddleMainBar'



function HomeMainBar({ slideIn, handleSlideIn }) {

  return (
    <>
      <div className="main_home_bar">

        <div className="LEFT_SIDE_BAR">
          <LeftSideBar slideIn={slideIn} handleSlideIn={handleSlideIn} />
        </div>

        <div className="MIDDLE_SIDE_BAR" >
          <MiddleMainBar />
        </div>

        <div className="RIGHT_SIDE_BAR">
          <RightSideBar />
        </div>

      </div>
    </>
  )
}

export default HomeMainBar
