import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Login() {
  return (
    <>
      <div className="log-in">
        <h1>Log In</h1>
        <div className="loginForm">
            <form action="/" method="POST">
                <label for="email">Email:</label>
                <input type="text" id="email" name="email"/>
                <input type="submit" value="Log In"/>
            </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login;
