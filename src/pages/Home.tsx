import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ParticlesComponent from "../components/animations/ParticlesComponent";

import TextSection from "../components/home/TextComponent"; 

// Global styles to hide default scrollbar and make it thinner
const GlobalStyle = createGlobalStyle`
  body, html {
    overflow: hidden; /* Hide scrollbars */
    height: 100%;
  }

  /* Show scrollbars for specific elements with overflow */
  body, .container {
    overflow: auto;
  }

  /* Adjust scrollbar width */
  ::-webkit-scrollbar {
    width: 6px; /* Set the width of the scrollbar */
  }

  /* Custom scrollbar track */
  ::-webkit-scrollbar-track {
    background-color: transparent; /* Make scrollbar track transparent */
  }

  /* Custom scrollbar handle */
  ::-webkit-scrollbar-thumb {
    background-color: #888; /* Change this to match your design */
    border-radius: 4px; /* Adjust border radius for a sleeker appearance */
  }

  /* Custom scrollbar handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Change color on hover */
  }
`;

// Styled container for homepage content
const Container = styled.div`
  margin: 0 auto;
  min-height: 100vh; /* Ensure that the container takes at least the full height of the viewport */
  position: relative; /* Ensure relative positioning */

  .first {
    height: 100vh;
    background: red;
    width: 100%;
    position: relative;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .second {
    height: 100vh;
    background: blue;
    width: 100%;
    position: relative;
    z-index: 0;
  }

  .text {
    position: absolute;
    bottom: -100%; /* Initially place the text below the container */
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Inter", sans-serif;
    opacity: 0; /* Initially make the text invisible */
    animation: slideIn 0.5s ease forwards; /* Apply the animation */
    z-index: 10;
  }

  @keyframes slideIn {
    0% {
      bottom: -100%; /* Starting position */
      opacity: 0;
    }
    100% {
      bottom: 20%; /* Final position (center of the div) */
      opacity: 1;
    }
  }

  .text h2 {
    margin-bottom: 8px;
    font-size: 3.75rem;
    font-weight: 600;
    line-height: 1.2;
    text-align: center;
  }

  .text p {
    margin-bottom: 0;
    font-weight: 600;
    text-align: center;
    width: 90vw;
  }

  .text a {
    position: relative;
    z-index: 10; /* Ensure the link is placed above other elements */
  }
  .text .learn:hover {
    background-color: rgb(229 59 58);
    color: #e5e7eb;
  }
 
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: 100%; /* Fill the remaining height */
  display: flex;
  justify-content: flex-end; /* Align the footer to the bottom */
`;

const Home: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const currentScrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        setIsHeaderVisible(currentScrollTop <= lastScrollTop);
        lastScrollTop = currentScrollTop;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <GlobalStyle />
      {isHeaderVisible && <Header />}

      <Container>
        <div className="first">
          <ParticlesComponent id={"animate"} />
          <TextSection /> {/* Use the new component */}
        </div>
        <div className="second"></div>
        <div className="first"></div>
        <div className="second"></div>
        
      </Container>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </div>
  );
};

export default Home;
