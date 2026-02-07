function calculateTax(salary) {
  let tax = 0;

  if (salary > 250000) {
    tax += Math.min(salary - 250000, 250000) * 0.10;
  }

  if (salary > 500000) {
    tax += Math.min(salary - 500000, 500000) * 0.20;
  }

  if (salary > 1000000) {
    tax += (salary - 1000000) * 0.25;
  }

  if (tax > 50000) {
    tax += (tax - 50000) * 0.05;
  }

  return Math.round(tax);
}

module.exports = calculateTax;
