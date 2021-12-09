/*
import React from 'react';
import CoachCard from './CoachCard'



class AltSearchPage extends React.Component{

    constructor(props){
        super(props);
        this.fetchUniversities = this.fetchUniversities.bind(this);
        this.fetchCoaches = this.fetchCoaches.bind(this);
        this.state = {
            universities: [],
            coaches: [],
            isSchoolSelected: '',
            searchQuery: '',
            fire: false
        };
    }

    componentDidMount(){
        this.fetchUniversities();

    }

    fetchUniversities(){
        //this.setState({fire: true});
        fetch(`http://localhost:5000/colleges/list`, {method: 'GET'})
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then((data) => {
          data.forEach(university => {
            this.setState({universities: university['university_name']})
          })
          this.setState({fire: true});
        })
        .catch((error) => console.log(error));
    }

    fetchCoaches(){
        
        let university_name = university['university_name'];
                let url = 'http://localhost:5000/coaches/university?university_name=' + university_name;
                fetch(url)
                .then((response) => {
                    if (!response.ok) throw Error(response.statusText);
                    console.log(response.json())
                    return response.json();
                })
                .then((data) => {
                    this.setState((prevState) => { coaches: prevState.coaches.concat(data) });
                })
                .catch((error) => console.log(error));
                
    }

    render(){
        console.log('Rendering Page...');
        return (
            <div className="collegeList">
                <div>
                    <h1>Did fire?</h1>
                    <h1>{(this.state.fire) ? 'Yes': 'No'}</h1>
                    <h1>{this.state.fire.toString()}</h1>
                    <h1>Length: {this.state.universities.length}</h1>
                </div>
                <div className="universities">
                    {this.state.universities.map((uni) => {
                        return (
                            <div>
                                <h1>{uni}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default AltSearchPage;
*/

import React from 'react'
import { useEffect, useState } from 'react'
import CoachCard from './CoachCard'

function AltSearchPage() {
  const [universities, setUniversities] = useState([]);
  const [coaches, setCoaches] = useState([]);
/*
  const coaches = [
    {id: 1, firstName: 'Jared', lastName: 'Miller', pronouns: 'he/him', email: 'jaredmil@umich.edu', school: 'University of Michigan', gradYear: 2022, gpa: 3.7, major: 'Computer Science', minor: '', housing: 'Off-Campus'},
    {id: 2, firstName: 'Vanita', lastName: 'Sharma', pronouns: 'she/her', email: 'vsharma@umich.edu', school: 'University of Michigan', gradYear: 2024, gpa: 3.85, major: 'Mathematics', minor: 'Business', housing: 'South Quad'},
    {id: 3, firstName: 'Andrew', lastName: 'Dazzo', pronouns: 'he/him', email: 'adazzo@cornell.edu', school: 'Cornell University', gradYear: 2023, gpa: 3.6, major: 'Physcology', minor: 'English', housing: 'West Dorm'},
    {id: 4, firstName: 'AJ', lastName: 'Hall', pronouns: 'they/them', email: 'ajhall@umich.edu', school: 'University of Michigan', gradYear: 2022, gpa: 3.7, major: 'Computer Science', minor: '', housing: 'Off-Campus'},
    {id: 5, firstName: 'Jessica', lastName: 'Jansen', pronouns: 'she/her', email: 'jjansen@cornell.edu', school: 'Cornell University', gradYear: 2025, gpa: 3.5, major: 'Computer Science', minor: 'Physics', housing: 'North Dorm'},
  ]
*/
  console.log('Entered altSearchPage');

  useEffect(() => {
    console.log('Entered first fetch');
    fetch(`http://localhost:5000/colleges/list`, {credentials: 'same-origin'})
    .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
    })
    .then(data =>{
        const temp = data.map((currentUni, index) => (
				  {id: index, name: currentUni['university_name']}
			  ));

        setUniversities(temp);
    })
    .catch(error => console.log(error));
  }, [])

  
  useEffect(() => {
    universities.map((university) => {
        let uni_name = university['name'].replace(/\s/g, '+');
        let url = 'http://localhost:5000/coaches/university?university_name=' + uni_name;
        fetch(url)
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then(data => {
            const prevCoaches = coaches;
            const temp = data.map((currentCoach, index) => (
              {id: index, 
                firstName: currentCoach['firstName'],
                lastName: 'Jansen', 
                pronouns: 'she/her', 
                email: 'jjansen@cornell.edu', 
                school: 'Cornell University', 
                gradYear: 2025, 
                gpa: 3.5, 
                major: 'Computer Science', 
                minor: 'Physics', 
                housing: 'North Dorm'}
            ))
            setCoaches(coaches + data);
        })
        .catch(error => console.log(error));
    })
  })


  const filterSchools = (schools, query) => {
    if (!query) {
        return schools
    }

    return schools.filter((school) => {
        const schoolName = school.name.toLowerCase()
        return schoolName.includes(query.toLowerCase())
    })
  }

  const filterCoaches = (school) => {
    return coaches.filter((coach) => {
        return coach.school == school
    })
  }

  const [ searchQuery, setSearchQuery ] = useState('')
  const filteredSchools = filterSchools(universities, searchQuery)
  const [ schoolSelected, setSchoolSelected ] = useState(false)
  const filteredCoaches = filterCoaches(searchQuery)

  return (
    <div class='SearchPage' style={{margin: 10, height: 1000}}>
      <h1>Search for Coaches by University.</h1>
      <div style={{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <input
          value={searchQuery}
          onInput={e => {
            setSchoolSelected(false)
            setSearchQuery(e.target.value)
          }}
          type='text'
          id='university-search'
          placeholder='University'
          name='search-bar'
          style={{
            width: 300,
            marginTop: 5,
            padding: 5,
          }}
        />
        {!schoolSelected &&
          <ul style={{
            listStyleType: 'none',
            width: 300,
            alignItems: 'left',
          }}>
            {filteredSchools.map((school) => (
                <li key={school.id}>
                  <button
                    onClick={e => {
                      setSearchQuery(school.name)
                      setSchoolSelected(true)
                    }}
                    style={{
                      width: 300,
                      padding: 5,
                    }}
                  >
                    {school.name}
                  </button>
                </li>
            ))}
          </ul>
        }
        {schoolSelected &&
          <div>
            <div style={{height: 20}} />
            <ul style={{
              listStyleType: 'none',
              alignItems: 'left',
            }}>
              {filteredCoaches.map((coach) => (
                  <li key={coach.id}>
                    <CoachCard info={coach} />
                  </li>
              ))}
            </ul>
          </div>
        }
      </div>

    </div>
  )
}

export default AltSearchPage
