import React from 'react';
import { useState } from 'react'
import '../../App.css';
import Footer from '../Footer';
import { Redirect } from "react-router-dom";

function Login(props) {
  const [ email, setEmail ] = useState('')

  const submitLogIn = () => {
    fetch(`https://eecs497-backend-api.herokuapp.com/coaches/id-by-email?email=${email}`, {
      method: "get",
    })
    .then((response) => {
      console.log(response)
      if (response.status != 200) {
        throw "ERROR: User Not Found"
      }
      return response.json()
    })
    .then(jsonResp => {
      console.log(jsonResp)
      props.setAuthedUser(jsonResp.coach_id)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      {console.log("Login.props: " + JSON.stringify(props))}
      {props.authedUser !== -1 ?
        <Redirect to={{
          pathname: "./profile"
        }}/>
      :
        <>
          <div className="loginForm">
            <div style={{
              marginTop: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <h1>Log In</h1>
              <div style={{flex: 1}}>
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
                <button type="submit" value="Log In" onClick={() => submitLogIn()}>Log In</button>
              </div>
            </div>
          </div>
          <Footer />
        </>
      }
    </>
  )
}

export default Login;
