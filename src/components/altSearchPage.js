
import React from 'react'
import { useEffect, useState } from 'react'
import CoachCard from './CoachCard'

function AltSearchPage() {
  const [universities, setUniversities] = useState([]);
  const [coaches, setCoaches] = useState([]);

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

  // This resource is helpful for figuring out how to do react hook fetches
  // https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret

  useEffect(() => {
    async function fetchUniversities(){
      let response = await fetch(`https://eecs497-backend-api.herokuapp.com/colleges/list`, {credentials: 'same-origin'})
      let data = await response.json()

      const u_temp = data.map((currentUni, index) => (
        {id: index, name: currentUni['university_name']}
      ));

      setUniversities(u_temp);

      async function fetchCoaches(uni){
        let c_response = await fetch('https://eecs497-backend-api.herokuapp.com/coaches/university?university_name=' + uni['name'].replace(/\s/g, '+'))
        let c_data = await c_response.json()

        const temp = c_data.map((currentCoach) => (
          {id: currentCoach['coach_id'],
            firstName: currentCoach['coach_name'].split(' ')[0],
            lastName: currentCoach['coach_name'].split(' ')[1],
            pronouns: 'n/a',
            email: currentCoach['coach_name'].replace(/\s/g, '') + '@collegecoach.com',
            school: currentCoach['university_name'],
            gradYear: currentCoach['university_grad_date'],
            gpa: currentCoach['gpa'],
            major: currentCoach['major'],
            minor: currentCoach['minor'],
            housing: 'n/a'}
        ))
        temp.forEach(element => setCoaches(old => [...old, element]));
      }

      u_temp.forEach(uni =>{
        fetchCoaches(uni)
      })
    }

    fetchUniversities()
  }, [])


  return (
    <div className='SearchPage' style={{margin: 10, height: 1000}}>
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
