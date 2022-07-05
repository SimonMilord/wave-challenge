import React from "react";
import "./customerList.scss";
import CustomerCard from "../CustomerCard/customerCard";

export default function customerList(props) {
  return (
    <div className="customerList">
      <div className="customerList__header">
        <ul className="customerList__titles">
          <li className="customerList__title">ID</li>
          <li className="customerList__title">Name</li>
          <li className="customerList__title">City</li>
          <li className="customerList__title">Email</li>
        </ul>
      </div>
      <ul className="customerList__list">
        {/* here I am mapping each customer in the list */}
        {props.customers.map((customer, index) => {
          return (
            <li className="customerList__item" key={index}>
              <CustomerCard {...customer} index={index} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
