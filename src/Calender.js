import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";

export default function Calender(props) {
  const [date, setDate] = useState(null);

  const today = new Date();

  const handleChange = (value) => {
    setDate(value);
  };

  return (
    <div style={{ width: "200px", marginLeft: "200px", marginTop:'20px',display:"flex", justifyContent: "flex-start" }}>
      <div style={{lineHeight: '2', marginRight:'20px'}}>Date </div>
      <DatePicker
        selected={date}
        onChange={(e) => handleChange(e, date)}
        className="form-control"
        placeholderText="Date"
        dateFormat="MM-dd-yyyy"
        minDate={today}
        customInput={
          <input type="text" id="validationCustom01" placeholder="First name" />
        }
      />
    </div>
  );
}
