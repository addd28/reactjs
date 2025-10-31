import React from "react";

export default function ObjectCard({ data }) {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
}
