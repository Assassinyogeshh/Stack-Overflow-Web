import React from 'react'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import './Tags.css'
import { tagsList } from './tagList'
function Tags({ slideIn, handleSlideIn }) {
  return (
    <>

      <div className="tags_page">
        <div className="LEFT_SIDE_BAR">
          <LeftSideBar slideIn={slideIn} handleSlideIn={handleSlideIn} />
        </div>

        <div className="tags">
          <h1>Tags</h1>
          <span className="tag_defination">
            <p>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
            <p>Using the right tags makes it easier for others to find and answer your question.</p>
          </span>

          <div className="tags_list">
            {tagsList.map((tags, index) => (
              <div className="tags_box" key={index}>
                <h5>{tags.tagName}</h5>

                <p>{tags.tagDesc}</p>

              </div>
            ))}

          </div>


        </div>

      </div>

    </>
  )
}

export default Tags
