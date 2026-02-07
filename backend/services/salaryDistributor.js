function distributeSalary(totalSalary, employees) {
  let salaries = Array(employees).fill(0);
  let remaining = totalSalary;

  const slabs = [250000, 250000, 500000];

  for (let slab of slabs) {
    const required = slab * employees;

    if (remaining >= required) {
      salaries = salaries.map(s => s + slab);
      remaining -= required;
    } else {
      const perPerson = remaining / employees;
      salaries = salaries.map(s => s + perPerson);
      remaining = 0;
      break;
    }
  }

  if (remaining > 0) {
    salaries = salaries.map(s => s + remaining / employees);
  }

  return salaries;
}

module.exports = distributeSalary;
