import React from 'react';
import "./customerList.scss";
import CustomerCard from '../CustomerCard/customerCard';

export default function customerList(props) {

  return (
    <div className='customerList'>
      <header className='customerList__header'>
        <ul className='customerList__titles'>
          <li className='customerList__title'>ID</li>
          <li className='customerList__title'>Name</li>
          <li className='customerList__title'>City</li>
          <li className='customerList__title'>Email</li>
        </ul>
      </header>
      <ul className='customerList__list'>
        {/* here I am mapping each customer in the list */}
        {props.customers.map((customer) => {
          return (
            <li className='customerList__item' key={customer.id}>
              <CustomerCard
              {...customer}
              />
            </li>
          )
        })}
      </ul>
    </div>
  );
}

