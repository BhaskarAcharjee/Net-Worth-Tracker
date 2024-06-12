import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import avatar from "../../Images/robot-avatar.png";

const NameModal = ({ handleNameSubmit, handleModalClose }) => {
  const { getUserDetails } = useGlobalContext();
  const [fullName, setFullName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    const fetchUserFullName = async () => {
      const userDetails = await getUserDetails();
      if (userDetails) {
        setFullName(userDetails.fullName);
        setProfilePic(userDetails.profilePic || ""); // Set profile picture if available
      }
    };
    fetchUserFullName();
  }, [getUserDetails]);

  const handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ModalBackdrop>
      <ModalContentWrapper>
        <div className="modal-content">
          <div className="modal-body">
            <ModalAvatar
              src={profilePic || avatar}
              alt="avatar"
              className="rounded-circle modal-avatar"
            />
            <form onSubmit={handleNameSubmit}>
              <div>
                <ModalTitle>Profile Details</ModalTitle>
                <FormOutline className="form-outline mb-4">
                  <FormControl
                    type="text"
                    id="fullname"
                    value={fullName}
                    onChange={handleNameChange}
                    placeholder="Your full name"
                  />
                </FormOutline>
                <FormOutline className="form-outline mb-4">
                  <FormControl
                    type="file"
                    id="profilePic"
                    accept="image/*"
                    onChange={handleProfilePicChange}
                  />
                  <FormLabel htmlFor="profilePic">
                    Upload Profile Picture
                  </FormLabel>
                </FormOutline>
                <PrimaryButton type="submit">Submit</PrimaryButton>
              </div>
            </form>
            <CloseButton onClick={handleModalClose}>&times;</CloseButton>
          </div>
        </div>
      </ModalContentWrapper>
    </ModalBackdrop>
  );
};

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease-in-out;
`;

const ModalContentWrapper = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 30px;
  position: relative;
  max-width: 450px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease-in-out;
`;

const ModalAvatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: -120px;
  border: 3px solid #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.h5`
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 1.5em;
  font-weight: 600;
  color: #333;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 25px;
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
  color: #999;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #333;
  }
`;

const FormOutline = styled.div`
  margin-bottom: 20px;
`;

const FormControl = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const FormLabel = styled.label`
  text-align: left;
  display: block;
  margin-bottom: 8px;
  color: #555;
`;

const PrimaryButton = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export default NameModal;
