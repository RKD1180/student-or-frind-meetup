import React, { useEffect, useState } from "react";
import "./Students.css";
import Student from "../Student/Student";
import Collection from "../Collection/Collection";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  const handlePayment = (student) => {
    const newCart = [...payment, student];
    setPayment(newCart);
    console.log(student);
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-9 cards ">
          {students.map((student) => (
            <Student
              key={student.name}
              student={student}
              handlePayment={handlePayment}
            ></Student>
          ))}
        </div>
        <div className="col-md-3">
          <Collection pay={payment}></Collection>
        </div>
      </div>
    </div>
  );
};

export default Students;
