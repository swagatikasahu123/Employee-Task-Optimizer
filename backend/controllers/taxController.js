const distributeSalary = require("../services/salaryDistributor");
const calculateTax = require("../services/taxCalculator");

exports.calculateTaxForEmployees = (req, res) => {
  const { employees, totalSalary } = req.body;

  if (employees <= 0 || totalSalary <= 0) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const salaries = distributeSalary(totalSalary, employees);

  const result = salaries.map((salary, index) => {
    const tax = calculateTax(salary);
    return {
      employeeId: index + 1,
      salary: Math.round(salary),
      tax,
      takeHome: Math.round(salary - tax)
    };
  });

  res.json(result);
};
