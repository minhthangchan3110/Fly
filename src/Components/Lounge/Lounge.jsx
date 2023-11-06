/* eslint-disable no-unused-vars */
import React from 'react'
import imageGrid from '../../assets/img/lounge.png'
function Lounge() {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={imageGrid} alt="" />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
          <div className='grids grid'>
          <div className="singleGrid">
            <span className="gridTitle">
              Help through the airpot
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className="gridTitle">
              Priority Boarding
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className="gridTitle">
              Care on the flight
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className="gridTitle">
              Chauffeur-drive service
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.
            </p>
          </div>
          
        </div>
        </div>

        
      </div>
    </div>
  )
}

export default Lounge