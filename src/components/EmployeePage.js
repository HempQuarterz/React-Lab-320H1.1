function EmployeePage({ selectedEmployee }) {
    if (!selectedEmployee) {
      return <div>No employee selected</div>;
    }
  
    const { name, photo, title, office, mobile, sms, email } = selectedEmployee;
  
    return (
      <div className="employee-page">
       <img src={photo} alt="Employee" />
       <div className="employee-info2">
        <h3>{name}</h3>
        <p>{title}</p>
        <div className="employee-info3">
        <p>Call Office: {office}</p>
        <p>Call Mobile: {mobile}</p>
        <p>SMS: {sms}</p>
        <p>Email: {email}</p>
      </div>
      </div>
      </div>
    );
  }
  
  export default EmployeePage;