function ResultTable({ data }) {
  if (!data.length) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>Employee</th>
          <th>Salary</th>
          <th>Tax</th>
          <th>Take Home</th>
        </tr>
      </thead>
      <tbody>
        {data.map(emp => (
          <tr key={emp.employeeId}>
            <td>{emp.employeeId}</td>
            <td>{emp.salary}</td>
            <td>{emp.tax}</td>
            <td>{emp.takeHome}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultTable;
