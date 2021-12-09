import React from 'react';
import { useState } from 'react'
import '../../App.css';
import Footer from '../Footer';

function Login() {
  const [ email, setEmail ] = useState('')

  const submitLogIn = () => {
    fetch(`https://eecs497-backend-api.herokuapp.com/coaches/id-by-email?email=${email}`, {
      method: "get",
    })
    .then((response) => {
      console.log(response)
      if (response.status != 200) {
        return "ERROR: User Not Found"
      }
      return response.json()
    })
    .then((jsonResponse) => {
      console.log(jsonResponse)
      // TODO: Stuff
    })
  }

  return (
    <>
      <div className="loginForm">
        <div style={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <h1>Log In</h1>
          <form action={submitLogIn()} style={{flex: 1}}>
            <input
              value={email}
              onChange={i => setEmail(i.target.value)}
              type='text'
              id='email'
              placeholder='Email'
              name='email'
              style={{
                width: 300,
                marginTop: 5,
                padding: 5,
                marginRight: 5,
              }}
            />
            <input type="submit" value="Log In"/>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login;
