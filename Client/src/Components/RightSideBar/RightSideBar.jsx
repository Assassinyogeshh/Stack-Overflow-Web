import React from 'react'
import Widget from './Widget'
import WidgetTags from './WidgetTags'

function RightSideBar() {
  return (
    <>
      <div className="right_Side">
        <div className="first_box">
            <Widget/>
        </div>
        <div className="second_box">
            <WidgetTags/>
        </div>
      </div>
    </>
  )
}

export default RightSideBar
