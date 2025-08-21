import React from 'react'

const FormInput = ({label,name,type,defaultValue,size}) => {
    return (
        <div className="form-control flex flex-col gap-y-1">
            <label  className="label capitalize">
                <span className="label-text">{label}</span>
               
            </label>
            <input  type={type} name={name}  defaultValue={defaultValue}  className={`input input-bordered w-full ${size}`} />
          
        </div>
    )
}

export default FormInput