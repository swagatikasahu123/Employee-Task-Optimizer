# Employee Tax Optimization System

## Description
A MERN-based application that distributes a company’s total yearly salary among employees in an optimal way to minimize overall income tax, strictly following the given tax slab rules.

The system calculates employee-wise salary, tax outgo, and take-home salary.

---

## Problem Summary
- Input: Number of employees and total yearly salary  
- Output: Employee-wise salary, tax, and take-home pay  
- Goal: Minimize total tax outgo legally

---

## Tax Rules Implemented
- Up to ₹2,50,000 → 0%
- ₹2,50,000 – ₹5,00,000 → 10%
- ₹5,00,000 – ₹10,00,000 → 20%
- Above ₹10,00,000 → 25%
- Additional 5% tax on tax amount exceeding ₹50,000

---

## Solution Approach
Salary is distributed equally among employees to keep individual incomes in lower tax slabs.  
Since the tax structure is progressive, equal distribution minimizes marginal tax and reduces surcharge impact.

---

## Features
- Accepts number of employees and total salary
- Optimized salary distribution
- Employee-wise tax and take-home calculation
- Slab-wise tax and surcharge implementation

---

## Tech Stack
- React.js
- Node.js
- Express.js
- Plain CSS

---

## Constraints Followed
- MERN stack only
- No CSS frameworks


---

## How to Run

### Backend
```bash
cd backend
npm install
npm start

### Backend
cd frontend
npm install
npm start
<img width="1366" height="691" alt="image" src="https://github.com/user-attachments/assets/11638f7f-f174-4710-8734-1ba650c9260d" />
