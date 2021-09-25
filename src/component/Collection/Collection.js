import React from "react";

const Collection = (props) => {
  const { pay } = props;

  let num = 0;
  let totalCollect = 0;
  let name = "";

  for (const student of pay) {
    num = 1 + num;
    totalCollect = totalCollect + student.cost;
    name = student.name + " || " + name;
  }
  return (
    <div className="shadow p-5 rounded">
      <h5>Collection </h5>
      <p>Number of Pay: {num}</p>
      <p>Total Collect: {totalCollect}</p>
      <div>
        <p>
          Name :<br /> {name}
        </p>
      </div>
    </div>
  );
};

export default Collection;
