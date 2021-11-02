import React from 'react';
import './HomeContentSection.css'

function HomeContentSection(props) {

  return (
    <div className="content-section" style={{background: props.color}}>
      <h1>{props.title}</h1>
      <div class="content">
        {props.content}
      </div>
    </div>
  )
}

export default HomeContentSection;
