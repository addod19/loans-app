import React, { useState, useEffect } from 'react';
import axios from 'axios';

import LoanForm from './loanForm';
import LoanResult from './loanResult';

const GetUserIPAddressAndGeoLocation = () => {

  const [ userIP, setUserIP ] = useState(null);
  const [ latitude, setUserLatitude ] = useState(0);
  const [ longitude, setUserLongitude ] = useState(0);

  const [ loanAmount, setLoanAmount ] = useState(0);
  const [ loanTermInYears, setLoanTermInYears ] = useState(0);
  const [ loanInterestPerYear, setLoanInterestPerYear ] = useState(0);

  const getUserDetails = async () => {
    try {
      const geoLoc = await axios.get('https://geolocation-db.com/json/');
      setUserIP(geoLoc.data.IPv4);
      setUserLatitude(geoLoc.data.latitude);
      setUserLongitude(geoLoc.data.longitude);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  const UserInterestMonthly = () => {
    let result = (loanAmount * loanInterestPerYear * loanTermInYears) / 100;

    return (result / 12);
  };

  let loanData = UserInterestMonthly();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loanAmount && loanTermInYears && loanInterestPerYear) {
      UserInterestMonthly();
    } else {
      console.log('Error submitting form');
    }
  };

  return (
    <>
      <h1>Welcome to loan apps</h1>
      <h3>User IP is: {userIP}</h3>
      <h4>User Geolocation is: longitude {longitude}  latitude {latitude} </h4>
      <LoanForm
        loanAmount={loanAmount} setLoanAmount={setLoanAmount}
        loanTermInYears={loanTermInYears} setLoanTermInYears={setLoanTermInYears}
        loanInterestPerYear={loanInterestPerYear} setLoanInterestPerYear={setLoanInterestPerYear}
        handleSubmit={handleSubmit}
      />
      <LoanResult loanData={loanData} />
    </>
  )
}

export default GetUserIPAddressAndGeoLocation;
