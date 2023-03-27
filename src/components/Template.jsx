import React, { useState, useEffect } from "react";
import axios from "axios";
import github from "../assets/images/github.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";

function Template() {
  const API = process.env.API;
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getData = async (id) => {
      const apiURl = id ? `${API}${id}` : API;
      try {
        const response = await axios.get(apiURl);
        setProfile(response.data.results[0]);
        //console.log(response.data.results[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="About">
      {Object.keys(profile).length > 0 ? (
        <div className="card">
          <div className="card_details">
            <div className="card_photo center circle">
              <img src={profile.picture.large} alt={profile.name.first} />
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style={{enableBackground: "new -580 439 577.9 194"}}
                xmlSpace="preserve"
              >
                <circle cx="50" cy="50" r="40" />
              </svg>
            </div>
            <p className="card_title">Hi, My name is</p>
            <p className="card_value">
              {profile.name.first} {profile.name.last}
            </p>
          </div>
          <div className="card_userdata">
            <ul>
              <li>{profile.email}</li>
              <li>{profile.location.country}</li>
            </ul>
          </div>
          <div className="card_social">
            <a href="https://twitter.com/gndx">
              <img src={twitter} />
            </a>
            <a href="https://github.com/gndx">
              <img src={github} />
            </a>
            <a href="https://instagram.com/gndx">
              <img src={instagram} />
            </a>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      ;
    </div>
  );
}

export default Template;
