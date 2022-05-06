import React from 'react';

const LoanResult = ({ loanData }) => {
  return (
    <>
      <h1>Loan result </h1>

      <h3>User Interest Per month: INR {loanData.toFixed(2)}</h3>
    </>
  )
}

export default LoanResult;
