import React from "react";
import EmployeeListItem from "./EmployeeListItem";
import picture1 from "./Images/James_King.jpg";
import picture2 from "./Images/Julie_Taylor.jpg";
import picture3 from "./Images/Eugene_Lee.jpg";
import picture4 from "./Images/John_Williams.jpg";
import picture5 from "./Images/Ray_Moore.jpg";
import picture6 from "./Images/Paul_Jones.jpg";


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



const EmployeeList = () => {
  return (
    <div className="employee-list">
    {employees.map((employee) => (
        <EmployeeListItem key ={employee.id} employee={employee}  />
    ))}
    </div>
  );
};

export default EmployeeList;
