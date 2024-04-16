import React from "react";
import styled from "styled-components";

// Styles for the popup container
const PopupContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

// Styles for the close button
const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

// Interface for props
interface InfoPopupProps {
  onClose: () => void; // Function to close the popup
}

// Functional component for the popup
const InfoPopup: React.FC<InfoPopupProps> = ({ onClose }) => {
  return (
    <PopupContainer>
      {/* Close button */}
      <CloseButton onClick={onClose}>Close</CloseButton>
      {/* Popup content */}
      <h2>Redisigned The Homepge</h2>
      <p>"Designing the homepage was a rewarding challenge that provided an opportunity for learning. I found adjusting the layout of sections like 'Our Service' and 'Explore Product' particularly engaging. These modifications allowed me to experiment with different design elements and enhance the user experience. Overall, it was a valuable experience that helped me grow my design skills."</p>
    </PopupContainer>
  );
};

export default InfoPopup;
