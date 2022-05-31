import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.first_name}</h2>
          <img className="circle-img" src={props.avatar} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">First Name: {props.first_name}</p>
          <p className="info">Last Name :{props.last_name}</p>
          <p className="info">Email: {props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
