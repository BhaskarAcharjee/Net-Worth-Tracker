import React, { useState, useEffect } from "react";
import styled from "styled-components";
import avatar from "../../Images/avatar.png";
import bhaskar from "../../Images/bhaskar.jpeg";
import { signout } from "../../utils/Icons";
import { menuItems } from "../../utils/menuItems";
import { useGlobalContext } from "../../context/globalContext";

function Navigation({ active, setActive, onSignOut }) {
  const [userDetails, setUserDetails] = useState(null);
  const { getUserDetails } = useGlobalContext();

  const handleProfileClick = () => {
    setActive(10); // Set the active menu item to trigger display of Profile (case:10 in App.js)
  };

  const handleSignOut = () => {
    onSignOut(); // Call the onSignOut function from props
  };

  useEffect(() => {
    // Fetch user details when the component mounts
    const fetchUserDetails = async () => {
      const details = await getUserDetails();
      if (details) {
        // Extract the first name from fullName
        const firstName = details.fullName.split(' ')[0];
        setUserDetails({ ...details, firstName });
      }
    };

    fetchUserDetails();
  }, [getUserDetails]);

  return (
    <NavStyled>
      <div className="user-con" onClick={handleProfileClick}>
        <img src={avatar} alt="" />
        <div className="text">
          <h2>{userDetails?.firstName}</h2>
          <p>Finance Tracker</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li onClick={handleSignOut}>{signout} Sign Out</li>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }
`;

export default Navigation;
