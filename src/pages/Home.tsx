import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ParticlesComponent from "../components/animations/ParticlesComponent";
import TextSection from "../components/home/TextComponent";
import WhyMetalogic from "../components/home/WhyMetalogic";
import ExploreProducts from "../components/home/ExploreProducts";
import OurServices from "../components/home/OurServices";
import OdometerComponent from "../components/component/OdometerComponent";

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
    background: #1e2f97;
    width: 100%;
    position: relative;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .second {
    height: auto;
    background: rgb(0 28 72);
    width: 100%;
    position: relative;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    .why{
      background: #1e2f97;
      border-radius: 20px;
      margin: 2rem;
    }
    .explore{
      width: 100%;
      display: flex;
      justify-content: center;
      background: white;
      gap: 5rem;
      height: auto;
    }
    .ourservice{
      width: 100%;
      background: white;
      height: auto;
      padding: 6rem;
      @media screen and (max-width: 768px) {
        padding: 4rem;
      }
    }
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

  @media screen and (max-width: 768px) {
    .text h2 {
      font-size: 2.5rem;
    }

    .text p {
      font-size: 0.9rem;
    }
  }
`;
const OdometerWrapper = styled.div`
position: absolute;
  bottom: -75px;
  width: 70%;
  left: 50%;
  background: white;
  border: 1px black opacity(0.5);
  transform: translateX(-50%);
  z-index: 200; /* Ensure the odometer overlaps other content */
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 90%;
    bottom: -50px; /* Adjust bottom position for smaller screens */
    padding: 1rem;
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: 100%; /* Fill the remaining height */
  display: flex;
  justify-content: flex-end; /* Align the footer to the bottom */
`;

const Home: React.FC = () => {
  const [isParticlesLoaded, setIsParticlesLoaded] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setIsParticlesLoaded(true);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsHeaderVisible(currentScrollTop < lastScrollTop);
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  if (!isParticlesLoaded) {
    return <div>Loading particles...</div>;
  }

  return (
    <div>
      <GlobalStyle />
      {isHeaderVisible && <Header />}

      <Container>
        <div className="first">
          <ParticlesComponent id={"animate"} />
          <TextSection />
        </div>
        <div className="second flex items-center justify-center">
          <div className="h-1/2 w-2/3 p-4 why" >
          <WhyMetalogic />
          </div>
        </div>
        <div className="second">
          <div className="explore">
          <ExploreProducts/>
          </div>
        </div>
        <div className="second">
          <div className="ourservice">
          <OurServices/>
          </div>
        </div>
        <OdometerWrapper>
          <OdometerComponent />
        </OdometerWrapper>
        
     
      </Container>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </div>
  );
};

export default Home;
