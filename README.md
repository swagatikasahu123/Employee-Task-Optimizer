# Employee Tax Optimization System

## Description
Employee Tax Optimization System is a MERN-based application that helps an organization distribute its total yearly salary among employees in a way that minimizes the overall income tax paid, while strictly following the given tax slab rules.

The system calculates employee-wise salary, tax outgo, and take-home salary.

---

## Problem Statement
The application accepts:
- Number of employees
- Cumulative yearly salary of all employees

Based on these inputs, it distributes salary optimally so that the total tax outgo across all employees is minimized.

---

## Tax Rules Implemented
- Up to ₹2,50,000 → No tax
- ₹2,50,000 to ₹5,00,000 → 10%
- ₹5,00,000 to ₹10,00,000 → 20%
- Above ₹10,00,000 → 25%
- If total tax exceeds ₹50,000, an additional 5% tax is applied on the excess amount

---

## Solution Approach
Salary is distributed equally among employees to keep individual incomes within lower tax slabs.  
Since the tax structure is progressive, equal distribution minimizes marginal tax and avoids higher slab taxation and surcharge wherever possible.

---

## Features
- Accepts number of employees and total yearly salary
- Distributes salary optimally to minimize tax
- Calculates employee-wise tax and take-home salary
- Implements slab-wise tax and surcharge rules

---

## Tech Stack
- React.js
- Node.js
- Express.js
- Plain CSS

---

## Technical Constraints Followed
- Only MERN stack technologies used
- No CSS frameworks
- No AI code generation tools

---

## How to Run

### Start Backend
```bash
cd backend
npm install
npm start
Start Frontend
cd frontend
npm install
npm start


2. Start frontend:
   - cd frontend
   - npm install
   - npm start
<img width="1366" height="691" alt="image" src="https://github.com/user-attachments/assets/faa3c56c-4fdc-43d6-8128-0b5fbd64efa1" />
