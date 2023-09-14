import React, { useEffect, useState } from "react";
import styled from "styled-components";
import avatar from "../Images/robot-avatar.png";
import { useGlobalContext } from "../context/globalContext";

function Profile() {
  const { error, setError, getUserDetails } = useGlobalContext();
  const [userDetails, setUserDetails] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Fetch user details when the component mounts
    const fetchUserDetails = async () => {
      const details = await getUserDetails();
      if (details) {
        setUserDetails(details);
      }
    };

    fetchUserDetails();
  }, [getUserDetails]);

  const handleThemeChange = () => {
    // Toggle dark mode
    setDarkMode(!darkMode);
  };

  return (
    <ProfileStyled darkMode={darkMode}>
      <div className="avatar-con">
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="info-con">
        <h2>{userDetails?.fullName}</h2>
        <div className="details">
          <div className="detail">
            <span>Email:</span>
            <p>{userDetails?.email}</p>
          </div>
          <div className="detail">
            <span>Phone:</span>
            <p>{userDetails?.phone}</p>
          </div>
          <div className="detail">
            <span>Location:</span>
            <p>{userDetails?.location}</p>
          </div>
          <div className="detail">
            <span>Date of Birth:</span>
            <p>{userDetails?.dateOfBirth}</p>
          </div>
          {/* Add more user details as needed */}
        </div>
      </div>
      <div className="user-activity">
        <h3>User Activity</h3>
        <ul>
          <li>Logged in 10 times this month</li>
          <li>Added 5 new transactions</li>
          <li>Updated profile information</li>
        </ul>
      </div>
      <div className="theme-toggle">
        <span>Dark Mode:</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleThemeChange}
          />
          <span className="slider round"></span>
        </label>
      </div>
      {/* <p>Error Message: {error && <span className="error">{error}</span>}</p> */}
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    padding: 0.5rem;
    box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
  }
  h2 {
    color: rgba(34, 34, 96, 1);
  }
  p {
    color: rgba(34, 34, 96, 0.6);
  }
  .info-con {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      .detail {
        display: flex;
        align-items: center;
        span {
          font-weight: 600;
          margin-right: 0.5rem;
        }
        p {
          color: rgba(34, 34, 96, 0.6);
        }
      }
    }
  }

  .user-activity {
    /* margin-top: 2rem; */
    h3 {
      font-size: 1.5rem;
      color: ${(props) => (props.darkMode ? "#ffffff" : "rgba(34, 34, 96, 1)")};
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 1rem 0;
      li {
        color: ${(props) =>
          props.darkMode ? "#ffffff" : "rgba(34, 34, 96, 0.6)"};
        margin: 0.5rem 0;
        &:before {
          content: "•";
          margin-right: 0.5rem;
          color: ${(props) =>
            props.darkMode ? "#ffffff" : "rgba(34, 34, 96, 0.6)"};
        }
      }
    }
  }

  .theme-toggle {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    span {
      font-weight: 600;
      /* color: ${(props) => (props.darkMode ? "#ffffff" : "rgba(34, 34, 96, 1)")}; */
      color: "rgba(34, 34, 96, 1)";
    }
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
      input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.4s;
        border-radius: 34px;
        &:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }
      }
      input:checked + .slider {
        background-color: #2196f3;
      }
      input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
      }
      input:checked + .slider:before {
        transform: translateX(26px);
      }
      .slider.round {
        border-radius: 34px;
      }
      .slider.round:before {
        border-radius: 50%;
      }
    }
  }
`;

export default Profile;
