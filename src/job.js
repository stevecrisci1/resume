import React from 'react'

export default function Job (props) {
  return (
    <div key={props.name} id={props.name} className='job'>
      <div className='company'>
        <h2>{props.fullname}</h2>
      </div>
      <div className='jobSquare'>
        <div className='position line2'>{props.position}</div>
        <div className='dates line2'>
          {props.start} – {props.end}
        </div>
        <div className='clearFix' />
        <div
          id='core'
          className='jobDescription'
          style={{ backgroundColor: 'lightgreen', padding: '30px' }}
        >
          {props.description}
        </div>
      </div>
    </div>
  )
}
