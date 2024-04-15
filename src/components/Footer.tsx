import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin: 5px;
  margin-top: 10000px;
  paddding: 1080px;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>© 2024 Metalogic. All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;



