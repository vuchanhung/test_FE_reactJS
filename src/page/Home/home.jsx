import React from 'react'
import './Home.css'
import MainScreen from '../../components/MainScreen/MainScreen'
const Home = () => {
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
              <div className="shop--img">
              </div>
            </div>
          </div>
          
          {/*bundles widget on the right  */}
          <div className="bundle--widget">
            <MainScreen />
          </div>
        </div>
      </div>
    </>

  )
}

export default Home
