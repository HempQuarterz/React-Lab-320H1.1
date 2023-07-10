import React from 'react';


function EmployeeListItem ({ employee, setSelectedEmployee }) {

  if (!employee) {
    return null;
  }
  const { id, name, photo, title } = employee;

  const handleClick = () => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="listedEmployee" onClick={handleClick}>
    <img src={photo} alt="Profile" />
    <div className="employee-details">
    <h3>{name}</h3>
    <p>{title}</p>
    </div>
    </div>
  );
};

export default EmployeeListItem;









