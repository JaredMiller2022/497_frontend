import React, { useEffect } from 'react';
import CoachCard from './CoachCard';
import './Cards.css'


class Cards extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      coaches: [],
    };
  }

  componentDidMount(){
    fetch(`http://localhost:5000/coaches/homepage-view`, {credentials: 'same-origin'})
      .then((response) => {
        if (!response.ok)
          throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState({ coaches: data });
      })
      .catch((error) => console.log(error));
  }

  render(){
    return (
      <div className="cards">
        <h1>Meet our Coaches!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              { !this.state.coaches ? <div>Loading...</div> : this.state.coaches.map((coach) => (
                <CoachCard info={coach} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

/*
function Cards() {

  // Get five coaches from api
  const [ fiveCoaches, setCoaches ] = React.useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/coaches/homepage-view`, { mode: 'no-cors', method: 'get' })
      .then((response) => {
        if (!response.ok)
          throw Error(response.statusText);
        return response.json();
      })
      .then((data) => setCoaches(data.message))
      .catch((error) => console.log(error));

  }, []);

  return (
    <div className="cards">
      <h1>Meet our Coaches!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            { !fiveCoaches ? <div>Loading...</div> : fiveCoaches.map((coach) => (
              <CoachCard info={coach} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
*/
export default Cards;
