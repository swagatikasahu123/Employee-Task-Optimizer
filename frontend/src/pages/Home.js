import { useState } from "react";
import InputForm from "../components/InputForm";
import ResultTable from "../components/ResultTable";

function Home() {
  const [data, setData] = useState([]);

  return (
    <div>
      <h1>Employee Tax Optimization System</h1>

      <p style={{ textAlign: "center", color: "#666", marginBottom: "25px" }}>
        Calculate optimal salary distribution to minimize total tax
      </p>

      <InputForm setData={setData} />

      <ResultTable data={data} />
    </div>
  );
}

export default Home;
