import React from 'react'
import './home.css'

const home = () => {
  return (
    <>
      <div className="home--container">
        {/* title content */}
        <div className="title--container">
          <span className="content-1">Welcome to</span>
          <br />
          <span className="content-2">GrainLogic!</span>
        </div>
        <div className="imgs--widgets--container">
          {/* img home on the left */}
          <div className="img--container">
            <div className="grid--img">
              <div className="shop--img"></div>
            </div>
          </div>
        </div>
        {/*bundles widget on the right  */}
        <div className="bundle--widget"></div>
      </div>
    </>

  )
}

export default home
