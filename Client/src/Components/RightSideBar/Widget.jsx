import React from 'react'
import './RightSideBar.css'
function Widget() {
  return (
    <>
      <div className="blog_meta_post">
        <ul className="BLOGS">
          <h3>The Overflow Blog</h3>
          <li><span className='becomeRow'> <img src="pen.svg" alt="" />
            <p>Observability is key to the future of software (and your DevOps career)</p></span></li>
          <li><span className='becomeRow'>
            <img src="pen.svg" alt="" />
            <p>Podcast 374: How valuable is your screen name?</p>
          </span></li>
        </ul>
        <ul className="META">
          <h3>Featured on Meta</h3>
          <li><span className='becomeRow'>
            <img src="comment.svg" alt="" />
            <p>Review queue workflows - Final release....</p></span></li>
          <li><span className='becomeRow'><img src="comment.svg" alt="" />
            <p>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</p></span></li>

          <li><span className='becomeRow'><img src="blackLogos.svg" alt="" />
            <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p></span></li>
        </ul>
        <ul className="POST">
          <h3>Hot Meta Posts</h3>
          <li><span className='becomeRow'>
            <p>38</p>
            <p>Why was this spam flag declined, yet the question marked as spam?</p></span></li>
          <li><span className='becomeRow'><p>20</p>
            <p>What is the best course of action when a user has high enough rep to...</p></span></li>

          <li><span className='becomeRow'><p>14</p>
            <p>Is a link to the "How to ask" help page a useful comment?</p></span></li>
        </ul>
      </div>
    </>
  )
}

export default Widget
