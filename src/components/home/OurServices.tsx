import React from "react";
import ServiceCard from "../component/ServiceCard";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10rem; 
  padding: 0 8px;
  @media (max-width: 1024px) {
    padding: 0 2px;
  }
`;

const ServiceCardWrapper = styled.div`
flex: 1 1 25%;
max-width: calc(25% - 16px);
text-align: center; /* Center align the cards */

@media (max-width: 1024px) {
  flex: 1 1 33.33%;
  max-width: calc(33.33% - 16px);
}

@media (max-width: 768px) {
  flex: 1 1 50%;
  max-width: calc(50% - 16px);
  
}

@media (max-width: 480px) {
  flex: 1 1 100%;
  max-width: calc(100% - 16px);
}
`;

const OurServices: React.FC = () => {
  return (
    <div className="order-2">
        <div className="flex flex-col gap-6 px-4 md:px-8 lg:order-2 py-3">
      <div className="opacity-1 transform-none">
        <span className="font-semibold">Our Services</span>
      </div>
      <div className="opacity-1 transform-none">
        <h5 className="text-5xl font-bold">Empowering <br /> Your Vision</h5>
      </div>
      <div className="opacity-1 transform-none">
        <p>Our range of offerings is carefully curated to cater to your diverse needs, ensuring that your digital journey is seamless, captivating, and results-driven.</p>
      </div>
      <a aria-label="services that metalogic software provides" className="flex w-fit gap-2 rounded-lg border border-secondary-300 px-3 py-2 text-secondary-300 transition-all duration-500 hover:bg-secondary-300 hover:text-white" href="/services">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>
    </div>
      <FlexContainer>
        <ServiceCardWrapper>
      <ServiceCard
          title="UI/UX"
          description="We create interfaces that are not just visually appealing, but also intuitive and conversion-focused."
          icon={{ name: "lucide lucide-monitor-smartphone", bgColor: "secondary-800" }}
          gradientColorFrom="#FF5d5d"
          gradientColorTo="#DD2476"
          backDescription="Discover how we design interfaces that blend visual appeal with intuitiveness, driving conversions and enhancing user experience seamlessly."
          linkText="See More"
          link="/ui-ux"
        />
        </ServiceCardWrapper>
        <ServiceCardWrapper>
        <ServiceCard
          title="Web Development"
          description="Our creative designers and skilled developers collaborate to create stunning websites that engage visitors and convert them into loyal customers."
          icon={{ name: "lucide lucide-globe", bgColor: "secondary-800" }}
          gradientColorFrom="#FF5d5d"
          gradientColorTo="#DD2476"
          backDescription="Witness the synergy of our creative designers and skilled developers, crafting stunning websites that captivate visitors and foster customer loyalty."
          linkText="See More"
          link="/services/web-development"
        />
        </ServiceCardWrapper>
        <ServiceCardWrapper>
        <ServiceCard
          title="Mobile Development"
          description="From streamlining operations to data-driven insights, we create solutions that empower your business to thrive in the digital age."
          icon={{ name: "lucide lucide-tablet-smartphone", bgColor: "#ff5d5d" }}
          gradientColorFrom="#FF5d5d"
          gradientColorTo="#DD2476"
          backDescription="Explore how our tailored solutions drive operational efficiency and leverage data insights for your business in the digital age."
          linkText="See More"
          link="/services/mobile-app"
        />
        </ServiceCardWrapper>
        <ServiceCardWrapper>
        <ServiceCard
          title="Brand & Marketing"
          description="Our branding experts craft strategies, logos, and visuals that resonate with your target audience, leaving a lasting impression."
          icon={{ name: "lucide lucide-heart-handshake", bgColor: "secondary-800" }}
          gradientColorFrom="#FF5d5d"
          gradientColorTo="#DD2476"
          backDescription="Discover how our branding strategies, logos, and visuals create a lasting impact, resonating effectively with your target audience."
          linkText="See More"
          link="/services/brand-marketing"
        />
        </ServiceCardWrapper>
        <ServiceCardWrapper>
        <ServiceCard
          title="Internship/Training"
          description="Our training programs and workshops cover a range of topics, from software utilization to design principles, enhancing your team's skills and productivity."
          icon={{ name: "lucide lucide-book-copy", bgColor: "#ff5d5d" }}
          gradientColorFrom="#FF5d5d"
          gradientColorTo="#DD2476"
          backDescription="Explore our comprehensive training programs and workshops, spanning software utilization to design principles, elevating your team's skills and productivity."
          linkText="See More"
          link="/services"
        />
        </ServiceCardWrapper>
      </FlexContainer>
    </div>
  );
}

export default OurServices;
