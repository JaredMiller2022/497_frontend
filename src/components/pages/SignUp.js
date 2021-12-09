import React from 'react';
import { useState } from 'react'
import '../../App.css';
import Footer from '../Footer';

export default function SignUp() {
  const [ email, setEmail ] = useState('')
  const [ name, setName ] = useState('')
  const [ pronouns, setPronouns ] = useState('')
  const [ university, setUniversity ] = useState('')
  const [ gradYear, setGradYear ] = useState()
  const [ gpa, setGPA ] = useState()
  const [ major, setMajor ] = useState('')
  const [ minor, setMinor ] = useState('')
  const [ housingType, setHousingType ] = useState('')

  return (
    <>
      <div className="signUpForm">
        <div style={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <h1>Create an Account</h1>
          <form action="/" method="POST" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            spaceBetween: 10,
          }}>
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
            <input type="submit" value="Sign Up" style={{
              width: 300,
              marginTop: 5,
              padding: 5,
            }}/>
          </form>
        </div>


      </div>
      <Footer />
    </>
  )
}
