import React from 'react';
import './mainPage.scss';

import CustomerList from '../../components/CustomerList/customerList';

export default function MainPage(props) {


  return (
    <div className='mainPage'>
      <header className='title'>Wave Challenge</header>
      <CustomerList customers={props.data}/>
    </div>
  );
}
