import React from 'react';

const InputField = ({ label, type, id, name, value, handleChange }) => {
  const handleInputChange = (event) => {
    handleChange(event); // Pasar el evento al manejador de cambios proporcionado
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleInputChange} // Llamar a la función handleInputChange en el evento onChange
      />
    </div>
  );
};

export default InputField;


