import React from 'react';

import './style.css';

const InputBlock = ({
  label,
  id,
  required,
  value,
  onChange,
}) => {
  return (
    <div className="input-block">
      <label htmlFor="github_username">{label}</label>
      <input
        name={id}
        id={id}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBlock;
