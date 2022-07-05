import './App.scss';
import './styles/partials/_reset.scss';
import CustomerList from './components/CustomerList/customerList';
import {useEffect, useState} from "react";
import axios from "axios";

export default function App() {

const [customersData, setCustomersData] = useState([]);

// calls the API get function when App.js mounts
useEffect(() => {
  getCustomers();
},[])

const getCustomers = () => {
  // normally I would hide the API key in ENV variables but since it is not so sensitive
  // I left it directly in the get request
  axios
    .get(`https://rawgit.com/wvchallenges/se-exp-challenge-invoice/master/settings.json`)
    .then((res) => {
      // set my response to the state to pass to other components as props
      setCustomersData(res.data.customers);
    })
    // Here i'm just console logging the error, we could change it to do something more specific
    .catch((err) => {
      console.log(err);
    })
}

  return (
    <div className="App">
      <header className='title'>Wave Challenge</header>
      <CustomerList customers={customersData}/>
    </div>
  );
}
