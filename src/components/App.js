import React, {useState} from "react";
import Header from "./Header"
import Styles from "./Styles.css"
import SearchBar from "./SearchBar"
import EmployeeListItem from "./EmployeeListItem";
import EmployeeList from "./EmployeeList";
import EmployeePage from "./EmployeePage";
import picture1 from "./Images/James_King.jpg";
import picture2 from "./Images/Julie_Taylor.jpg";
import picture3 from "./Images/Eugene_Lee.jpg";
import picture4 from "./Images/John_Williams.jpg";
import picture5 from "./Images/Ray_Moore.jpg";
import picture6 from "./Images/Paul_Jones.jpg";


function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const employees = [
    {
      id: 1,
      photo: picture1,
      name: "James King",
      title: "President and CEO",
      office: "123-456-7890",
      mobile: "098-765-4321",
      sms: "098-765-4321",
      email: "james.king@gmail.com"
    },
    {
      id: 2,
      photo: picture2,
      name: "Julie Taylor",
      title: "VP of Marketing",
      office: "123-456-7890",
      mobile: "098-765-4321",
      sms: "098-765-4321",
      email: "julie@gmail.com"
    },
    {
      id: 3,
      photo: picture3,
      name: "Eugene Lee",
      title: "CFO",
      office: "123-456-7890",
      mobile: "098-765-4321",
      sms: "098-765-4321",
      email: "eugene@gmail.com"
    },
    {
      id: 4,
      photo: picture4,
      name: "John Williams",
      title: "VP of Engineering",
      office: "123-456-7890",
      mobile: "098-765-4321",
      sms: "098-765-4321",
      email: "john@gmail.com"
    },
    {
      id: 5,
      photo: picture5,
      name: "Ray Moore",
      title: "VP of Sales",
      office: "123-456-7890",
      mobile: "098-765-4321",
      sms: "098-765-4321",
      email: "ray@gmail.com"
    },
    {
      id: 6,
      photo: picture6,
      name: "Paul Jones",
      title: "QA Manager",
      office: "123-456-7890",
      mobile: "098-765-4321",
      sms: "098-765-4321",
      email: "paul@gmail.com"
    }
  ];
    
  return (

    <div className="mainPage"> 

   <div className="homePage">

   <div className="header">
    <Header />
</div>
<div>
  <SearchBar />
</div>

<div className="employee-list">
    {employees.map((employee) => (
      <EmployeeListItem
      key={employee.id}
      employee={employee}
      pictures = {[picture1, picture2, picture3, picture4, picture5, picture6]}
      setSelectedEmployee={setSelectedEmployee}
      />
    ))}

    </div>
</div>


<div className="employee-page">
<h1>Employee</h1>
  <EmployeePage selectedEmployee={selectedEmployee} />
</div>
</div>
  );
}

export default App