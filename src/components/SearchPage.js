import React from 'react'
import { useState } from 'react'
import CoachCard from './CoachCard'

function SearchPage() {
  const universities = [
    {id: 1, name: 'Cornell University'},
    {id: 2, name: 'Georgia Institute of Technology'},
    {id: 3, name: 'Harvard University'},
    {id: 4, name: 'Princeton University'},
    {id: 5, name: 'Stanford University'},
    {id: 6, name: 'University of California, Los Angeles'},
    {id: 7, name: 'University of Maryland'},
    {id: 8, name: 'University of Michigan'},
    {id: 9, name: 'University of Virginia'}
  ]

  const coaches = [
    {id: 1, firstName: 'Jared', lastName: 'Miller', pronouns: 'he/him', email: 'jaredmil@umich.edu', school: 'University of Michigan', gradYear: 2022, gpa: 3.7, major: 'Computer Science', minor: '', housing: 'Off-Campus'},
    {id: 2, firstName: 'Vanita', lastName: 'Sharma', pronouns: 'she/her', email: 'vsharma@umich.edu', school: 'University of Michigan', gradYear: 2024, gpa: 3.85, major: 'Mathematics', minor: 'Business', housing: 'South Quad'},
    {id: 3, firstName: 'Andrew', lastName: 'Dazzo', pronouns: 'he/him', email: 'adazzo@cornell.edu', school: 'Cornell University', gradYear: 2023, gpa: 3.6, major: 'Physcology', minor: 'English', housing: 'West Dorm'},
    {id: 4, firstName: 'AJ', lastName: 'Hall', pronouns: 'they/them', email: 'ajhall@umich.edu', school: 'University of Michigan', gradYear: 2022, gpa: 3.7, major: 'Computer Science', minor: '', housing: 'Off-Campus'},
    {id: 5, firstName: 'Jessica', lastName: 'Jansen', pronouns: 'she/her', email: 'jjansen@cornell.edu', school: 'Cornell University', gradYear: 2025, gpa: 3.5, major: 'Computer Science', minor: 'Physics', housing: 'North Dorm'},
  ]

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

export default SearchPage
