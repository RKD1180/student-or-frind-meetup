import React from "react";
import "./Student.css";

const Student = (props) => {
  const { name, age, School, img, cost, country } = props.student;

  return (
    <div>
      <div className="col-md-12 ">
        <div className="card me-2 mb-5 shadow" style={{ width: "16rem" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Name :{name}</h5>
            <p className="card-text">Age : {age}</p>
            <p className="card-text">Country : {country}</p>
            <p>Collage: {School}</p>
            <p>MeetUp Cost : {cost} TK</p>
            <button
              onClick={() => props.handlePayment(props.student)}
              className="btn btn-warning"
            >
              <i class="fas fa-cart-plus"></i> Pay MeetUp Fee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
