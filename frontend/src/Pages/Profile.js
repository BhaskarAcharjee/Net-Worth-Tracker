import React from "react";
import styled from "styled-components";
import avatar from "../Images/avatar.png";
import bhaskar from "../Images/bhaskar.jpeg";
import { useGlobalContext } from "../context/globalContext";

function Profile() {
  const { error, setError } = useGlobalContext(); // Test Purpose

  return (
    <ProfileStyled>
      <div className="avatar-con">
        <img src={bhaskar} alt="Avatar" />
      </div>
      <div className="info-con">
        <h2>Bhaskar Acharjee</h2>
        <p>Your Finance Tracker</p>
        <div className="details">
          <div className="detail">
            <span>Email:</span>
            <p>bhaskaracharjee.world@gmail.com</p>
          </div>
          <div className="detail">
            <span>Location:</span>
            <p>Kolkata, West Bengal, India</p>
          </div>
        </div>
      </div>
      <p>Error Message : {error && <p className="error">{error}</p>}</p>
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
`;

export default Profile;