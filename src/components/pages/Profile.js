import React from 'react';
import { useState, useEffect } from 'react'
import '../../App.css';
import Footer from '../Footer';

const fillProfile = (props) => {
  console.log("fillProfile() - authedUser: " + props.authedUser)

  return fetch(`https://eecs497-backend-api.herokuapp.com/coaches/info?coach_id=${props.authedUser}`, {
    method: "get",
  })
  .then((response) => {
    console.log(response)
    if (response.status != 200) {
      throw console.log("ERROR: User Not Found")
    }
    return response.json()
  })
  .then(jsonResp => {
    console.log("jsonResp:" + JSON.stringify(jsonResp))
    console.log(jsonResp.coach_id)
    return ({
      email: jsonResp.email,
      name: jsonResp.coach_name,
      pronouns: jsonResp.pronouns,
      university: jsonResp.university_name,
      gradYear: jsonResp.university_grade_date,
      gpa: jsonResp.gpa,
      major: jsonResp.major,
      minor: jsonResp.minor,
      housingType: jsonResp.housing_type,
    })
  })
  .catch(err => {
    console.log(err)
  })
}

export default function Profile(props) {
  const [ info, setInfo ] = useState({})
  var submitEdits = false
  const [ loaded, setLoaded ] = useState(false)

  useEffect(() => {
    const fetchInfo = async () => {
      const coachInfo = await fillProfile(props)
      console.log("coachInfo: " + JSON.stringify(coachInfo))
      setInfo({...coachInfo})
      setLoaded(true)
    }
    fetchInfo()
  }, [])

  console.log("Profile.props:" + JSON.stringify(props))

  const submitEditProfile = () => {
    if (!submitEdits) {
      return
    }
    fetch("https://eecs497-backend-api.herokuapp.com/coaches/create", {
      method: "create",
      headers: {
        'Accept': 'application/json',
        'ContentType': 'application/json'
      },
      body: new URLSearchParams({
        'coach_name': info.name,
        'university_name': info.university,
        'university_grade_date': info.gradYear,
        'gpa': info.gpa,
        'major': info.major,
        'minor': info.minor,
        'email': info.email,
        'pronouns': info.pronouns,
        'housing_type': info.housingType,
      })
    })
    .then((response) => {
      console.log(response)
      if (response.status != 200) {
        throw "ERROR: Could not create user"
      }
      fetch(`https://eecs497-backend-api.herokuapp.com/coaches/id-by-email?email=${info.email}`, {
        method: "get",
      })
      .then((response) => {
        console.log(response)
        if (response.status != 200) {
          throw console.log("ERROR: User Not Found")
        }
        return response.json()
      })
      .then(jsonResp => {
        console.log(jsonResp)
        console.log(jsonResp.coach_id)
        props.setAuthedUser(jsonResp.coach_id)
      })
      .catch(err => {
        console.log(err)
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  if (!loaded) {
    return (
      <></>
    )
  }
  return (
    <>
      <div className="signUpForm">
        <div style={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <h1>Profile</h1>
          <input
            value={info.email}
            onChange={e => setInfo({ email: e.target.value })}
            type='text'
            id='email'
            placeholder='Email'
            name='email'
            style={{width: 300, marginTop: 5, padding: 5,}}
          />
          <input
            value={info.name}
            onChange={i => setInfo({ name: i.target.value })}
            type='text'
            id='name'
            placeholder='Full Name'
            name='name'
            style={{
              width: 300,
              marginTop: 5,
              padding: 5,
            }}
          />
          <input
            value={info.pronouns}
            onChange={i => setInfo({ pronouns: i.target.value})}
            type='text'
            id='pronouns'
            placeholder='Pronouns'
            name='pronouns'
            style={{
              width: 300,
              marginTop: 5,
              padding: 5,
            }}
          />
          <input
            value={info.university}
            onChange={i => setInfo({ university: i.target.value})}
            type='text'
            id='university'
            placeholder='University'
            name='university'
            style={{
              width: 300,
              marginTop: 5,
              padding: 5,
            }}
          />
          <input
            value={info.gradYear}
            onChange={i => setInfo({ gradYear: i.target.value})}
            type='number'
            id='gradYear'
            placeholder='Graduation Year'
            name='gradYear'
            style={{
              width: 300,
              marginTop: 5,
              padding: 5,
            }}
          />
          <input
            value={info.major}
            onChange={i => setInfo({ major: i.target.value})}
            type='text'
            id='major'
            placeholder='Major'
            name='major'
            style={{
              width: 300,
              marginTop: 5,
              padding: 5,
            }}
          />
          <input
            value={info.minor}
            onChange={i => setInfo({ minor: i.target.value})}
            type='text'
            id='minor'
            placeholder='Minor'
            name='minor'
            style={{
              width: 300,
              marginTop: 5,
              padding: 5,
            }}
          />
          <input
            value={info.gpa}
            onChange={i => setInfo({ gpa: i.target.value})}
            type='decimal'
            id='gpa'
            placeholder='GPA'
            name='gpa'
            style={{
              width: 300,
              marginTop: 5,
              padding: 5,
            }}
          />
          <input
            value={info.housingType}
            onChange={i => setInfo({ housingType: i.target.value})}
            type='text'
            id='housingType'
            placeholder='Housing Type'
            name='housingType'
            style={{
              width: 300,
              marginTop: 5,
              padding: 5,
            }}
          />
          <button
            text="Submit Edits"
            value="Edit Profile"
            style={{
              width: 300,
              marginTop: 5,
              padding: 5,
            }}
            onClick={() => {
              submitEdits = true
              submitEditProfile()
            }}
          >
            Submit Edits
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}
