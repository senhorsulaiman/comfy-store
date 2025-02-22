import React from 'react'

const FormCheckbox = ({label,name,defaultValue,size}) => {
  return (
    <label className="form-control flex flex-col gap-y-1.5 ">
        <div className="label capitalize cursor-pointer">
            <span className="label-text">{label}</span>
        
        </div>
        <input type='checkbox' name={name}  defaultValue={defaultValue}  className={`checkbox w-6 h-6 rounded-full checkbox-primary ${size}`} />
  
    </label>
  )
}

export default FormCheckbox