import React from 'react';

const Input = ({ label, type, value, onChange, name, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        style={{ width: '100%' }}
        required
      />
    </div>
  );
};

export default Input;


