import React, { useEffect, useState } from "react";
import InputLabel from "./InputLabel";
import { termDepositCalculator } from "../utils/Calculator";
import "./TermDeposit.css";

const TermDeposit = () => {

  const [ depositAmount, setDepositAmount ] = useState("");
  const [ interestRate, setInterestRate ] = useState("");
  const [ investmentTerm, setInvestmentTerm ] = useState("");
  const [ interestPaid, setInterestPaid ] = useState("At Maturity");
  const [ termDeposit, setTermDeposit ] = useState(null);

  const handleDepositAmountChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]*$/;

    // If the input matches the regex (only digits), update the deposit amount
    // allowing a maximum value of 15,000,000
    if (regex.test(value) && value >= 0 && value <= 15000000) {
      setDepositAmount(value);
    }
  };

  const handleInterestRateChange = (e) => {
    const value = e.target.value;

    // If the input is between 0 and 100, update the interest rate
    if (value >= 0 && value <= 100) {
      setInterestRate(value);
    }
  };

  const handleInvestmentTermChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]*$/;

    // If the input matches the regex (only digits), update the investment term
    // allowing a maximum value of 60 months (5 years)
    if (regex.test(value) && value >= 0 && value <= 60) {
      setInvestmentTerm(value);
    }
  }

  useEffect(() => {
    if (depositAmount && interestRate && investmentTerm && interestPaid) {
      const amount = termDepositCalculator(depositAmount, interestRate, investmentTerm, interestPaid);
      setTermDeposit(amount);
    } else {
      setTermDeposit(null);
    }
  }, [depositAmount, interestRate, investmentTerm, interestPaid])

  return (
      <>
      <div className="term-deposit">
        <h1 className="term-deposit-title" >Calculate your Term Deposit</h1>
        <form >
          <div className="form-group">
            <InputLabel forInput="deposit-amount" labelText="Deposit Amount" />
            <input 
              id="deposit-amount" 
              onChange={handleDepositAmountChange} 
              placeholder="Enter Deposit Amount"
              required
              type="text"
              value={depositAmount} 
            />
          </div>
          <div className="form-group">
            <InputLabel forInput="interest-rate" labelText="Interest Rate" />
            <input 
              id="interest-rate"
              onChange={handleInterestRateChange}
              placeholder="Enter Interest Rate" 
              required
              step="0.05"
              type="number"
              value={interestRate}
            />
          </div>
          <div className="form-group">
            <InputLabel forInput="investment-term" labelText="Investment Term (months)" />
            <input 
              id="investment-term" 
              onChange={handleInvestmentTermChange}
              placeholder="Enter Investment Term" 
              required
              type="text"
              value={investmentTerm}
            />
          </div>
          <div className="form-group">
            <InputLabel forInput="interest-paid" labelText="Interest Paid" />
            <div className="custom-dropdown" >
              <select 
                id="interest-paid" 
                onChange={(e) => setInterestPaid(e.target.value)} 
                value={interestPaid} 
              >
                <option value="Monthly" >Monthly</option>
                <option value="Quarterly" >Quarterly</option>
                <option value="Annually" >Annually</option>
                <option value="At Maturity" >At Maturity</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      {
        termDeposit !== null &&
          <div className="result-section">
            <h2>Term Deposit Total Balance</h2>
            <h3>$ {termDeposit}</h3>
          </div>
      }
      </>
  );
}

export default TermDeposit;