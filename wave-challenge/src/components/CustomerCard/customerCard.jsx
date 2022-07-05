import React from "react";
import "./customerCard.scss";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

export default function customerCard(props) {

  return (
    <div className="customerCard">
      <div className="customerCard__left">
        <p className="customerCard__info customerCard__info--id">{props.id}</p>
        <p className="customerCard__info customerCard__info--name">
          {props.name}
        </p>
        <p className="customerCard__info customerCard__info--city">
          {props.city}
        </p>
        <p className="customerCard__info customerCard__info--email">
          {props.email}
        </p>
      </div>
      <div className="customerCard__right">
        <Link className="customerCard__editLink" to={`/edit/${props.index}`}>
          <MdEdit />
        </Link>
      </div>
    </div>
  );
}
