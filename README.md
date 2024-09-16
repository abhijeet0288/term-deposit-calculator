# Term Deposit Calculator

This is a simple **Term Deposit Calculator** application built with **React**, allowing users to calculate the term deposit based on the deposit amount, interest rate, investment term, and payment frequency.

## Table of Contents

- [Installation](#installation)
- [Running Tests](#running-tests)

## Installation

1. **Clone the respository**:

   ```bash
   git clone https://github.com/abhijeet0288/term-deposit-calculator.git
   cd term-deposit-calculator

2. **Install dependencies**:

   ```bash
   npm install

3. **Start development server**:
   
   ```bash
   npm start
  
 The application will be available at `http://localhost:3000/`

## Running Tests

1. **Run all tests**:
    
   ```bash
   npm test -- --watchAll=false

2. **Run tests for specific file** (for instance, Calculator.test.js):

   ```bash
   npm test -- Calculator.test.js

## Assumptions

**User Inputs**:

1. The investment term is entered in months, and no fractional months are allowed (between 0 and 60)
2. The interest rate provided is a percentage between 0 and 100
3. The deposit amount will not exceed 15,000,000

**Calculation Accuracy**:

1. Results are rounded to the nearest number

## Design Decisions

**Frontend Framework**:

The application was built using React for its component-based architecture, which will make it easier to break down the application into reusable components.

**Compounding Logic**:

A helper function has been created to handle the compounding interest logic based on the frequency selected by the user. This is done in a modular way, allowing for easy future adjustments to the calculation if needed

**Form Validation**:

Basic form validation was added to ensure that no negative values, decimal places (for deposit, and investment term), or out-of-bound interest rates (0-100%) could be submitted

## Tradeoffs

**Form Validation**:

While the application includes basic validation for user inputs, more sophisticated error handling (e.g., invalid input feedback) could be implemented in the future

**Testing**:

Since the app contains only one main component, the focus has been on comprehensive unit testing to ensure the core logic is robust. Given the simplicity of the interactions between inputs and the calculation function, integration tests have not been included for now. If the app's complexity increases, adding integration tests would be the next step to ensure the entire flow functions as expected.
   
