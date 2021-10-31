import React, { useEffect } from 'react';
import CoachCard from './CoachCard';
import './Cards.css'


function Cards() {

  // Get five coaches from api
  const [ fiveCoaches, setCoaches ] = React.useState(null);

  useEffect(() => {
    fetch("localhost:5000/routes/coaches/homepage-view")
      .then((res) => res.json())
      .then((data) => setCoaches(data.message));
  }, []);

  return (
    <div className="cards">
      <h1>Meet our Coaches!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            { fiveCoaches.map((coach) => (
              <CoachCard info={coach} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
