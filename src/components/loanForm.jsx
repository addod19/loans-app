import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.section`
  margin-top: 3em;
  height: 15em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoanForm = ({
  loanAmount, loanTermInYears, loanInterestPerYear,
  setLoanAmount, setLoanTermInYears, setLoanInterestPerYear,
  handleSubmit
}) => {

  return (
    <FormWrapper>
      <h1>Loan form </h1>
      <Form method='POST' onSubmit={handleSubmit}>
        <Div>
          <label>
            Loan Amount
          </label>
          <input
            type='number'
            name={loanAmount}
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </Div>
        <Div>
          <label>
            Loan Terms in Years
          </label>
          <input
            type='number'
            name={loanTermInYears}
            value={loanTermInYears}
            onChange={(e) => setLoanTermInYears(e.target.value)}
          />
        </Div>
        <Div>
          <label>
            Loan Interest Per Year
          </label>
          <input
            type='number'
            name={loanInterestPerYear}
            value={loanInterestPerYear}
            onChange={(e) => setLoanInterestPerYear(e.target.value)}
          />
        </Div>
        <div>
          <button
            type='submit'
            onClick={handleSubmit}
          >
            Calculate Loan
          </button>
        </div>
      </Form>
    </FormWrapper>
  )
}

export default LoanForm;
