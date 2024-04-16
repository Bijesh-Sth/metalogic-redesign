import React from "react";
import Card from "../component/Card";

const ExploreProducts: React.FC = () => {
  const isSmallScreen = window.innerWidth <= 768;

  return (
    <div className="container py-20">
      <div className="flex flex-col items-center justify-center">
        <div className="lg:mx-auto lg:w-[80%]">
          <div style={{ opacity: 1, transform: "none" }}>
            <h2 className="z-50 pb-12 text-4xl font-bold md:w-[50%] md:pb-24 md:text-5xl">Explore Our Products</h2>
          </div>
          <div className={`w-full md:mx-auto md:w-full ${isSmallScreen ? 'items-center' : 'items-start'} gap-4`}>
            {/* Render cards */}
            <Card
              title="Banshwali"
              description="View full Banshawali chart digitally."
              imageSrc="https://metalogic.com.np/imageslider/banshwali/idcard.svg"
              buttonText="Learn more"
              buttonLink="/banshwali"
            />
            <Card
              title="Digital Khata"
              description="Manage and learn about events nearby you."
              imageSrc="https://metalogic.com.np/imageslider/digitalkhata/dashboard.svg"
              buttonText="Learn more"
              buttonLink="/digital_khata"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
