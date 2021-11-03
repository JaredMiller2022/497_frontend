import React from 'react';
import CoachCard from './CoachCard'



class AltSearchPage extends React.Component{

    constructor(props){
        this.fetchUniversities = this.fetchUniversities.bind(this);
        this.state = {
            universities: [],
            coaches: [],
            isSchoolSelected: '',
            searchQuery: ''
        };
    }

    componentDidMount(){

    }

    fetchData(){
        fetch(`http://localhost:5000/coaches/[MAKE NEW API ROUTE]`, {credentials: 'same-origin'})
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then((data) => {
            this.setState({ universities: data.universities });
            
            data.univerities.forEach(coach => {
                fetch([coachURL])
                .then((response) => {
                    if (!response.ok) throw Error(response.statusText);
                    return response.json();
                })
                .then((data) => {
                    this.setState((prevState) => { coaches: prevState.coaches.concat(data) });
                })
                .catch((error) => console.log(error));
            })
        })
        .catch((error) => console.log(error));
    }

    fetchUniversities(){
        // This might need a new api route that returns
        // a pair (university name, coach id)
    }

    fetchCoach(){
        
    }

    render(){

    }
}

export default AltSearchPage;