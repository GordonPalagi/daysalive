import React from 'react'
import './DateBox.css';

function DateBox({title, value, onChange}) {
  return (
    <div className='datebox'>
      <label className='datebox-label'>{title}</label>
      <input className='datebox-input' type='text' value={value} onChange={onChange}/>
    </div>
  )
}

export default DateBox