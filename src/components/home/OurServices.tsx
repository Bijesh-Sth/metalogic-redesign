import React from "react";
import ServiceCard from "../component/ServiceCard";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10rem; 
  padding: 0 16px;
`;

const ServiceCardWrapper = styled.div`
  flex: 1 1 25%;
  max-width: calc(25% - 16px);

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
