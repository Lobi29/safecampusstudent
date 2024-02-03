import React from 'react'

// assets
import { FcGoogle } from "react-icons/fc";
import campaignImage from '../../assets/resource.jpg';


// stylesheet
import classes from './Resource.module.css';

const Resource = () => {
  return (
    <div className={classes.resource}>
      <div className={classes.campaignContainer}>
        <div className={classes.heading}>
          Theft Awarness Campaign
        </div>
        <div className={classes.subheading}>
          Awareness campaign educates community on theft prevention, vigilance, security measures, reporting, and community involvement for safer neighborhoods
        </div>
        <div className={classes.linkContainer}>
          <FcGoogle className={classes.icon} />
          <div className={classes.meetLInk}>
            Join Meet
          </div>
        </div>
      </div>
      <div className={classes.articleContainer}>
        <div className={classes.categoryHeading}>Popular Categoies : </div>
        <div className={classes.categoryContainer}>
          <p className={classes.category}>Stalking</p>
          <p className={classes.category}>Self-Defence</p>
          <p className={classes.category}>Theft</p>
          <p className={classes.category}>Harrashment</p>
          <p className={classes.category}>Violence</p>
        </div>
        <div className={classes.newsContainer}>
          <div className={classes.news}>
            <div className={classes.newsText}>
              <div className={classes.newsHeading}>What is Campus Safety and Security?</div>
              <div className={classes.newsSubHeading}>
                Campus safety and security refers to the measures taken by a college or university  .....
              </div>
              <button onClick={() => {console.log("first")}} className={classes.buttonNews}>Know More</button>
            </div>
            <img className={classes.newsImg} src={campaignImage} alt="news" />
          </div>
          <div className={classes.news}>
            <div className={classes.newsText}>
              <div className={classes.newsHeading}>What is Campus Safety and Security?</div>
              <div className={classes.newsSubHeading}>
                Campus safety and security refers to the measures taken by a college or university  .....
              </div>
              <button onClick={() => {console.log("first")}} className={classes.buttonNews}>Know More</button>
            </div>
            <img className={classes.newsImg} src={campaignImage} alt="news" />
          </div>
          <div className={classes.news}>
            <div className={classes.newsText}>
              <div className={classes.newsHeading}>What is Campus Safety and Security?</div>
              <div className={classes.newsSubHeading}>
                Campus safety and security refers to the measures taken by a college or university  .....
              </div>
              <button onClick={() => {console.log("first")}} className={classes.buttonNews}>Know More</button>
            </div>
            <img className={classes.newsImg} src={campaignImage} alt="news" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resource