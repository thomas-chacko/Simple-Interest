import { TextField, Stack, Button } from "@mui/material";
import { useState } from "react";

const App = () => {
  const [interest, setInterest] = useState(0);
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);

  const [isPrinciple, setIsPrinciple] = useState(true);
  const [isRate, setIsRate] = useState(true);
  const [isYear, setIsYear] = useState(true);

  const validateData = (e) => {
    const { name, value } = e.target;
    if (!!value.match(/^[0-9]+$/)) {
      if (name === "principle") {
        setPrinciple(value);
        setIsPrinciple(true);
      } else if (name === "rate") {
        setRate(value);
        setIsRate(true);
      } else if (name === "year") {
        setYear(value);
        setIsYear(true);
      }
    } else {
      if (name === "principle") {
        setPrinciple(value);
        setIsPrinciple(false);
      } else if (name === "rate") {
        setRate(value);
        setIsRate(false);
      } else if (name === "year") {
        setYear(value);
        setIsYear(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!principle || !rate || !year) {
      alert("plese enter values");
    } else {
      setInterest((principle * year * rate) / 100);
    }
  };

  const handleReset = () => {
    setInterest(0);
    setPrinciple(0);
    setYear(0);
    setRate(0);
    setIsPrinciple(true);
    setIsRate(true);
    setIsYear(true);
  };
  return (
    <div
      style={{ height: "100vh", width: "100%" }}
      className="d-flex justify-content-center align-items-center bg-dark"
    >
      <div className="bg-light p-4">
        <h1 className="text-center fw-bold ">Simple Intrest App</h1>
        <p className="text-center">caculate your simple interset easily</p>
        <div
          style={{ height: "110px" }}
          className="w-100 mt-4 d-flex flex-column justify-content-center align-items-center bg-primary text-light shadow  "
        >
          <h1 className="fw-bold">₹ {interest}</h1>
          <p>Total simple intrest</p>
        </div>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mt-4">
            <TextField
              name="principle"
              value={principle || ""}
              onChange={(e) => validateData(e)}
              className="w-100"
              id="standard-basic"
              label="Principle Amount"
              variant="standard"
            />
            {!isPrinciple && (
              <span className="text-danger">*invlaid input</span>
            )}
          </div>
          <div className="mt-4">
            <TextField
              name="rate"
              value={rate || ""}
              onChange={(e) => validateData(e)}
              className="w-100"
              id="standard-basic"
              label="Rate of Interest"
              variant="standard"
            />
            {!isRate && <span className="text-danger">*invlaid input</span>}
          </div>
          <div className="mt-4 mb-4">
            <TextField
              name="year"
              value={year || ""}
              onChange={(e) => validateData(e)}
              className="w-100"
              id="standard-basic"
              label="Year"
              variant="standard"
            />
            {!isYear && <span className="text-danger">*invlaid input</span>}
          </div>
          <Stack direction="row" spacing={11}>
            <Button
              disabled={isPrinciple && isYear && isRate ? false : true}
              variant="contained"
              type="submit"
            >
              calculate
            </Button>
            <Button onClick={handleReset} variant="contained">
              reset
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
};
export default App;
