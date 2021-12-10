import React from 'react';
import { useState } from 'react'
import '../../App.css';
import Footer from '../Footer';
import { Redirect } from "react-router-dom";

export default function SignUp(props) {
  const [ email, setEmail ] = useState('')
  const [ name, setName ] = useState('')
  const [ pronouns, setPronouns ] = useState('')
  const [ university, setUniversity ] = useState('')
  const [ gradYear, setGradYear ] = useState('')
  const [ gpa, setGPA ] = useState()
  const [ major, setMajor ] = useState('')
  const [ minor, setMinor ] = useState('')
  const [ housingType, setHousingType ] = useState('')

  const submitSignUp = () => {
    fetch("https://eecs497-backend-api.herokuapp.com/coaches/create", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'ContentType': 'application/json'
      },
      body: new URLSearchParams({
        'coach_name': name,
        'university_name': university,
        'university_grade_date': gradYear,
        'gpa': gpa,
        'major': major,
        'minor': minor,
        'email': email,
        'pronouns': pronouns,
        'housing_type': housingType,
      })
    })
    .then((response) => {
      console.log(response)
      if (response.status != 200) {
        throw "ERROR: Could not create user"
      }
      fetch(`https://eecs497-backend-api.herokuapp.com/coaches/id-by-email?email=${email}`, {
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

  return (
    <>
    {console.log("Login.props: " + JSON.stringify(props))}
    {props.authedUser !== -1 ?
      <Redirect to="./profile" />
    :
      <>
        <div className="signUpForm">
          <div style={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <h1>Create an Account</h1>
            <input
              value={email}
              onChange={e => {
                setEmail(e.target.value)
              }}
              type='text'
              id='email'
              placeholder='Email'
              name='email'
              style={{width: 300, marginTop: 5, padding: 5,}}
            />
            <input
              value={name}
              onChange={i => setName(i.target.value)}
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
              value={pronouns}
              onChange={i => setPronouns(i.target.value)}
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
              value={university}
              onChange={i => setUniversity(i.target.value)}
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
              value={gradYear}
              onChange={i => setGradYear(i.target.value)}
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
              value={major}
              onChange={i => setMajor(i.target.value)}
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
              value={minor}
              onChange={i => setMinor(i.target.value)}
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
              value={gpa}
              onChange={i => setGPA(i.target.value)}
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
              value={housingType}
              onChange={i => setHousingType(i.target.value)}
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
              text="Submit"
              value="Sign Up"
              style={{
                width: 300,
                marginTop: 5,
                padding: 5,
              }}
              onClick={() => submitSignUp()}
            >
              Submit
            </button>
          </div>


        </div>
        <Footer />
      </>
    }
    </>
  )
}
