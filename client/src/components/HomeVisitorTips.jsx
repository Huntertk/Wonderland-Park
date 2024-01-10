import React from 'react'
import '../styles/homeVisitors.scss'

const HomeVisitorTips = () => {
  return (
    <section className="homeVisitorTipsMainContainer">
        <h1>Visitor Tips & Guidelines</h1>
        <ul>
            <li><span>Re-admission : </span> &nbsp;Ticket is only for 1 time entry. No re-entry allowed.</li>
            <li>
              <span>
                Hygiene and Comfort : 
              </span>
             &nbsp;Please bring extra clothes and amenities for you personal use.
            </li>
            <li>
              <span>
                Parking :  
              </span>
              &nbsp;Enjoy free parking space for all customers.
            </li>
            <li>
              <span>
                Food and Meals : 
              </span>
              &nbsp;A variety of restaurants and shops available.No outside food is allowed including mineral water bottle. 
            </li>
        </ul>
    </section>
  )
}

export default HomeVisitorTips