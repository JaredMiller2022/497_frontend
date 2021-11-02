import React from 'react';
// import './OurServices.css'

function OurServices() {

  return (
    <div style={{
      justifyContent: "center",
      display: "flex",
      flexDirection: "row",
    }}>
      <div style={{
        flex: 0.8,
        maxWidth: 800,
        minWidth: 650,
        height: 300,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}>
        <div style={{
          width: 200,
          height: 250,
          borderStyle: "solid",
          borderColor: "black",
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: 15,
        }}>
          <h2>Essay Help</h2>
          <div style={{height: 15,}} />
          <p>Speak with our coaches to brainstorm application essay topics based on your background and to review your drafts once they are written.</p>
        </div>
        <div style={{
          width: 200,
          height: 250,
          borderStyle: "solid",
          borderColor: "black",
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: 15,
        }}>
          <h2>Q&A</h2>
          <div style={{height: 15,}} />
          <p>Get all of your application and school Q&A answered by our knowledgable coaches. If they don't know the answer, they'll contact someone who will.</p>
        </div>
        <div style={{
          width: 200,
          height: 250,
          borderStyle: "solid",
          borderColor: "black",
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: 15,
        }}>
          <h2>Tours</h2>
          <div style={{height: 15,}} />
          <p>Sign up for a dorm and/or campus tour and our coaches will show you the greatest study spots on campus whether it is virtual or in-person!</p>
        </div>
      </div>
    </div>
  )
}

export default OurServices
