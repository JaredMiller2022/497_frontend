import React from 'react'
import { useState } from 'react'

function CoachCard(props) {

  const coachInfo = props.info

  return (
    <div class='CoachCard' style={{
      height: 200,
      width: 500,
      margin: 10,
      padding: 5,
      border: '1px solid black',
      borderRadius: 10,
    }}>
      <div style={{display: 'flex', flexDirection: 'row', }}>
        <h3>{coachInfo.firstName} {coachInfo.lastName}</h3>
        <div style={{width: 5,}} />
        <h5 style={{marginTop: 5, }}>{coachInfo.pronouns}</h5>
      </div>
      <h5>Email: {coachInfo.email}</h5>
      <h5>Major: {coachInfo.major}</h5>
      <h5>Minor: {coachInfo.minor == '' ? '--' : coachInfo.minor}</h5>
      <h5>Grad Year: {coachInfo.gradYear}</h5>
      <h5>GPA: {coachInfo.gpa == '' ? '--' : coachInfo.gpa}</h5>

    </div>
  )
}

export default CoachCard
