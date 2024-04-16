import React, { useState } from "react";
import styled from "styled-components";

// Styled components for the front and back of the card
const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.6s;
`;

const Back = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  transition: transform 0.6s;
`;

const FlippableCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  perspective: 1000px;
`;

const FlippableCard: React.FC<{ frontContent: React.ReactNode; backContent: React.ReactNode }> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <FlippableCardWrapper onClick={handleCardClick}>
      <Front style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>{frontContent}</Front>
      <Back style={{ transform: isFlipped ? "rotateY(0deg)" : "rotateY(-180deg)" }}>{backContent}</Back>
    </FlippableCardWrapper>
  );
};

export default FlippableCard;
