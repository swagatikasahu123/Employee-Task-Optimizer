import { useState } from "react";

function InputForm({ setData }) {
  const [employees, setEmployees] = useState("");
  const [salary, setSalary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!employees || !salary) {
      alert("Please enter all values");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/tax/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employees: Number(employees),
          totalSalary: Number(salary),
        }),
      });

      const result = await res.json();
      setData(result);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Number of Employees"
        value={employees}
        onChange={(e) => setEmployees(e.target.value)}
        min="1"
      />

      <input
        type="number"
        placeholder="Total Yearly Salary (₹)"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        min="1"
      />

      <button type="submit" disabled={loading}>
        {loading ? "Calculating..." : "Calculate"}
      </button>
    </form>
  );
}

export default InputForm;
