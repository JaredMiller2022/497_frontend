import React from 'react';
import './Cards.css'

function displayCard(props) {

  const coachInfo = props

  return (
    <div class='CoachCard' style={{
      height: 200,
      width: 400,
      margin: 10,
      padding: 5,
      border: '1px solid black',
      borderRadius: 10,
    }}>
      <div style={{display: 'flex', flexDirection: 'row', }}>
        <h3>{coachInfo.coach_name}</h3>
      </div>
      <h5>University: {coachInfo.university_name}</h5>
      <h5>Grad Year: {coachInfo.university_grad_date}</h5>
      </div>
  )
}


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
              { (this.state.coaches.length == 0) ? <div>Loading...</div> : this.state.coaches.map((coach) => (
                displayCard(coach)
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Cards;
