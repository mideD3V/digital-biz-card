import React from 'react'
import './interest.css'
import Date from '../../Components/date/Date'

const Interest = () => {
  return (
    <div id="interest">
      <h3>Interest</h3>
      <p>
        <span>
        Developing cutting-edge digital solutions that help businesses thrive in the very competitive global web space.
        </span>
        <br />
        <br />
        <ul>
          Here is a list of other things I am interested in:
          <li>Construction (ConstructionTech)</li>
          <li>Real Estate (EstateTech)</li>
          <li>Music Production (MusicTech)</li>
          <li>Traveling (TravelTech)</li>
          <li>Finance (Fintech)</li>
        </ul>
      </p>

      <Date />
    </div>
  );
}

export default Interest