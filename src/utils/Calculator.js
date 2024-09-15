export const termDepositCalculator = (depositAmount, interestRate, investmentTerm, interestPaid) => {
  const amount = parseFloat(depositAmount);
  const rate = parseFloat(interestRate) / 100;
  const term = parseFloat(investmentTerm); // investment term in months
  let totalAmount;

  switch (interestPaid) {
    case "Monthly":
      totalAmount = amount * Math.pow(1 + rate / 12, 12 * (term / 12));
      break;
    case "Quarterly":
      totalAmount = amount * Math.pow(1 + rate / 4, 4 * (term / 12));
      break;
    case "Annually":
      totalAmount = amount * Math.pow(1 + rate, (term / 12));
      break;
    case "At Maturity":
      totalAmount = amount * (1 + rate * (term / 12));
      break;
    default:
      totalAmount = amount * (1 + rate * (term / 12));
      break;
  }

  return Math.round(totalAmount); 
}