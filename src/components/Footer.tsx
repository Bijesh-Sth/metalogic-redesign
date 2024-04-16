import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  color: red;
  background-color: rgb(0 28 72);
  padding: 20px 10px;
  gap: 10px;
  justify-content: center;
  height: auto;
  width: 100%;
  z-index: 100;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="flex flex-col items-center footer">
        <h3>Company Name</h3>
        <p>Address: 1234 Street Name, City, Country</p>
        <p>Phone: +1234567890</p>
        </div>
    </StyledFooter>
  );
};

export default Footer;
