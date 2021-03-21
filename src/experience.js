import React from 'react'
import ExperienceList from './experiencelist.js'


export default function Experience (props) {
  return (
    <>
      <div className='displayPart'>
        <div className='title'>
          <h3> EXPERIENCE </h3>
        </div>

        <div className='scrollPart'>
          <ExperienceList />
        </div>
      </div>
    </>
  )
}
