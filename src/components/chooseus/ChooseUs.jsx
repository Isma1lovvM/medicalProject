import React from 'react'
import './chooseus.css'
import doktorlar from '../../assets/Rectangle 11.png'

function ChooseUs() {
  return (
    <section className="chooseus">
      <div className="chooseus-left">
        <img src={doktorlar} alt="" />
      </div>

      <div className="chooseus-right">
        <h2>Why You Choose Us?</h2>

        <ul className="chooseus-list">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li> 
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>

        <a href="" className="chooseus-link">
          Learn More →
        </a>
      </div>
    </section>
  )
}

export default ChooseUs
