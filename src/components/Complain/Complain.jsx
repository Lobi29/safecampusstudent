import React, { useState } from 'react';


// Assets
import complainImage from '../../assets/13105981_5146766.jpg';

//  styles
import classes from './Complain.module.css';

const Complain = () => {
  const [complain, setComplain] = useState({
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setComplain({ ...complain, [e.target.name]: e.target.value })
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setComplain({ ...complain, profilePicture: base64 })
  };


  return (
    <div className={classes.login}>
      <div className={classes.top}>
        <img className={classes.loginImg} src={complainImage} alt="complain" />
      </div>
      <div className={classes.bottom}>
        <div className={classes.heading}>
          Complain Section!
        </div>
        <div className={classes.subHeading}>
          Never hesitate to complain about your issues, INSTITUE IS WITH YOU
        </div>
        <form className={classes.form} onSubmit={() => console.log("hello")}>
          <div className={classes.selectBox}>
            <div>Select the Category :</div>
            <select
              className={classes.form__select}
              name="state"
              value={complain.category}
              placeholder='state'
              onChange={handleChange} autoComplete='on'
            >
              <option value="Assam">Assam</option>
              <option value="Arunachal">Arunachal</option>
              <option value="Manipur">Manipur</option>
              <option value="Nagaland">Nagaland</option>
            </select>
          </div>
          <div className={classes.inputBox}>
            <textarea
              rows={6}
              className={classes.inputField}
              name='description'
              placeholder='Describe your issue'
              value={complain.description}
              onChange={handleChange}
              autoComplete='on'
            />
          </div>
          <div className={classes.inputBox}>
            <input
              className={classes.form__image}
              name='image'
              type="file"
              placeholder='upload profile picture'
              onChange={handleFileUpload}
              autoComplete='on'
            />
          </div>
          <div className={classes.submitBox}>
            <button className={classes.buttonSubmit} type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Complain;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
};