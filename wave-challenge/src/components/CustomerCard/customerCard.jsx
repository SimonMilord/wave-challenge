import React from 'react';
import "./customerCard.scss";

export default function customerCard(props) {

  return (
    <div className='customerCard'>
      <p className='customerCard__info customerCard__info--id'>{props.id}</p>
      <p className='customerCard__info customerCard__info--name'>{props.name}</p>
      <p className='customerCard__info customerCard__info--city'>{props.city}</p>
      <p className='customerCard__info customerCard__info--email'>{props.email}</p>
    </div>
  );
}

