import React from "react";
import "./form-input.style.scss";

export const FormInput = ({ handlechange, label, ...otherprops }) => (
  <div className="group">
    <input className="form-input" onChange={handlechange} {...otherprops} />
    {label ? (
      <label
        className={`${
          otherprops.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
