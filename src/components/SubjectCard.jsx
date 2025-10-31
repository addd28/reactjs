import React from "react";

const SubjectCard = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.subject} />
      <h3>{data.subject}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default SubjectCard;
