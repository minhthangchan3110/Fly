/* eslint-disable no-unused-vars */
import React from 'react'
import {SlCalender } from 'react-icons/sl'
import {BsShieldCheck} from 'react-icons/bs'
import {BsBookmarkCheck} from 'react-icons/bs'
function Info() {
  return (
    <div className='info section'>
      <div className="infoContainer container">
        <div className='titleDiv flex'>
          <h2>Travel to make memories all around the world</h2>
          <button className="btn">
            View All
          </button>
        </div>

        <div className="cardsDiv grid">
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <SlCalender className="icon" />
            </div>
            <span className='cardTitle'>Book & Relax</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className="icon" />
            </div>
            <span className='cardTitle'>Smart Checklist</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className="icon" />
            </div>
            <span className='cardTitle'>Save more</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Info