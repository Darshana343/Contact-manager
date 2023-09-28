import React from "react";
import user from "../images/user.img";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img
        className="ui avatar img"
        alt="user"
        src={user}
        style={{ height: "50px", width: "60px" }}
      />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        onClick={() => props.clickHandler(id)}
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "10px" }}
      ></i>
    </div>
  );
};

export default ContactCard;
