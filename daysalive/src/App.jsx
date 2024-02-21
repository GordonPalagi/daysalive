import "./App.css";
import DateBox from "./DateBox";
import moment from "moment";
import { useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

function App() {
  const [year, setYear] = useState(1900);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [result, setResult] = useState(null);

  const inputDate = `${month} ${day} ${year}`;

  const calculateTimeDifference = () => {
    const currentDate = moment();
    const selectedDate = moment(inputDate, "MM DD YYYY");

    const years = currentDate.diff(selectedDate, "years");
    selectedDate.add(years, "years");

    const months = currentDate.diff(selectedDate, "months");
    selectedDate.add(months, "months");

    const days = currentDate.diff(selectedDate, "days");

    if (years < 0 || months < 0 || days < 0) {
      return alert("Please enter a valid date!");
    }

    if (years === 0 && months === 0 && days === 0) {
      return alert("You are born today!");
    }

    if (inputDate > moment().toNow()) { 
      return alert("Please enter a valid date!");
    }

    setResult({
      years,
      months,
      days,
    });
  };

  return (
    <div className="App">
      <main className="year-selection">
        <DateBox
          title="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <DateBox
          title="Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <DateBox
          title="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </main>
      <div className="submit-line">
        <hr className="line" />
        {!result ? (
          <BsFillArrowDownCircleFill
            onClick={calculateTimeDifference}
            className="submit-button"
          />
        ) : 
        <GrPowerReset
          onClick={() => {
            setResult(null),
            setYear(1900),
            setMonth(1),
            setDay(1)}}
          className="submit-button"/>}
      </div>

      {result ? (
        <div className="result">
          <p>
            <span>{result.years}</span> years
          </p>
          <p>
            <span>{result.months}</span> months
          </p>
          <p>
            <span>{result.days}</span> days
          </p>
        </div>
      ) : (
        <div className="result">
          <p><span>--</span> years</p>
          <p><span>--</span> months</p>
          <p><span>--</span> days</p>
        </div>
      )}
    </div>
  );
}

export default App;
