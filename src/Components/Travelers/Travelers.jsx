/* eslint-disable no-unused-vars */
import React from 'react'
import paris from '../../assets/img/paris.jpeg'
import newyork from '../../assets/img/newyork.jpeg'
import london from '../../assets/img/london.jpeg'
import dubai from '../../assets/img/dubai.jpeg'
import traveler1 from '../../assets/img/user1.jpeg'
import traveler2 from '../../assets/img/user2.jpg'
import traveler3 from '../../assets/img/user3.jpg'
import traveler4 from '../../assets/img/user4.jpeg'
const travelers = [
  {
    id:1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName:'IsraTech',
    socialLink: '@isratech8'
  },
  {
    id:2,
    destinationImage: newyork,
    travelerImage: traveler2,
    travelerName:'Wilson Lindsey',
    socialLink: '@wilsonlindsey'
  },
  {
    id:2,
    destinationImage: london,
    travelerImage: traveler3,
    travelerName:'Wilson Lindsey',
    socialLink: '@wilsonlindsey'
  },
  {
    id:2,
    destinationImage: dubai,
    travelerImage: traveler4,
    travelerName:'Wilson Lindsey',
    socialLink: '@wilsonlindsey'
  }
]

function Travelers() {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month!</h2>

        <div className='travelersContainer grid'>
          {
            travelers.map(({id, destinationImage, travelerImage, travelerName,socialLink})=>{
              return(
                <div key={id} className="singleTraveler">
                  <img src={destinationImage} alt=""  className='destinationImage'/>
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className='travelerImage' />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Travelers