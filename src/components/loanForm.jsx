import React from 'react';

const LoanForm = ({
  loanAmount, loanTermInYears, loanInterestPerYear,
  setLoanAmount, setLoanTermInYears, setLoanInterestPerYear,
  handleSubmit
}) => {

  return (
    <>
      <h1>Loan form </h1>
      <form method='POST' onSubmit={handleSubmit}>
        <div>
          <label>
            Loan Amount
          </label>
          <input
            type='number'
            name={loanAmount}
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
        <div>
          <label>
            Loan Terms in Years
          </label>
          <input
            type='number'
            name={loanTermInYears}
            value={loanTermInYears}
            onChange={(e) => setLoanTermInYears(e.target.value)}
          />
        </div>
        <div>
          <label>
            Loan Interest Per Year
          </label>
          <input
            type='number'
            name={loanInterestPerYear}
            value={loanInterestPerYear}
            onChange={(e) => setLoanInterestPerYear(e.target.value)}
          />
        </div>
        <div>
          <button
            type='submit'
            onClick={handleSubmit}
          >
            Calculate Loan
          </button>
        </div>
      </form>
    </>
  )
}

export default LoanForm;
