import React from 'react'

const FormSelect = ({label,name,list,defaultValue,size}) => {
  return (
    <div className='form-control'>


        <label htmlFor={name}>
            <span className='label-text capitalize'>{label}</span>
        </label>
        <select name={name} className={`select select-bordered ${size}`} id={name} defaultValue={defaultValue}>
            {list.map((item,index)=>{

                return <option key={index}>{item}</option>
            })}
        </select>
    </div>
  )
}

export default FormSelect