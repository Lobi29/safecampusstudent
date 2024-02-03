import React, { useState } from 'react'

import { AiTwotoneAlert } from "react-icons/ai";

// stylesheet
import classes from './ImergencyRequest.module.css';

const ImergencyRequest = () => {
  const [details, setDetails] = useState({
    location: "",
    scholarID: ""
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  };

  return (
    <div className={classes.requestContainer}>
      <AiTwotoneAlert className={classes.icon} />
      <div className={classes.heading}>Imergency</div>
      <form className={classes.form} onSubmit={() => { console.log("first") }}>
        <div className={classes.selectBox}>
          <div className={classes.subHeading}>Select Your Location:</div>
          <select
            className={classes.form__select}
            name="state"
            value={details.location}
            placeholder='state'
            onChange={handleChange} autoComplete='on'
          >
            <option value="Assam">Assam</option>
            <option value="Arunachal">Arunachal</option>
            <option value="Manipur">Manipur</option>
            <option value="Nagaland">Nagaland</option>
          </select>
        </div>
        <div className={classes.submitBox}>
          <button className={classes.buttonSubmit} type='submit'>Please Extract Me</button>
        </div>
      </form>
    </div>
  )
}

export default ImergencyRequest