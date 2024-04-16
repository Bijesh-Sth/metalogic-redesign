import styled from "styled-components";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: { name: string; bgColor: string };
    gradientColorFrom: string;
    gradientColorTo: string;
    backDescription: string;
    linkText: string;
    link: string;
  }

const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.6s;
  z-index: 2;
`;

const Back = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  color: white;
  transition: transform 0.6s;
  z-index: 1;
`;

const CardWrapper = styled.div`
  width: 16rem;
    height: 24rem;
  position: relative;
  perspective: 1000px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;

  &:hover ${Front} {
    transform: rotateY(-180deg);
  }

  &:hover ${Back} {
    transform: rotateY(0deg);
  }
`;

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    icon,
    gradientColorFrom,
    gradientColorTo,
    backDescription,
    linkText,
    link,
  }: ServiceCardProps) => {
    return (
    <CardWrapper>
      <Front style={{ background: `linear-gradient(to right, ${gradientColorFrom}, ${gradientColorTo})` }}>
        <div className="flex flex-col items-center justify-center gap-4 rounded-xl py-4 text-center" style={{ height: "100%" }}>
          <div className={`rounded-full bg-${icon.bgColor} p-8 text-white`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={icon.name}
            />
          </div>
          <div className="px-2 text-white">
            <h2 className="pb-4 text-xl font-semibold">{title}</h2>
            <p className="px-4 text-sm">{description}</p>
          </div>
        </div>
      </Front>
      <Back style={{ background: `linear-gradient(to right, ${gradientColorFrom}, ${gradientColorTo})` }}>
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-secondary-600 text-center" style={{ height: "100%" }}>
          <p className="p-2 text-ui-600">{backDescription}</p>
          <a aria-label="see details about our services" className="text-blue-700 underline underline-offset-4" href={link}>
            {linkText}
          </a>
        </div>
      </Back>
    </CardWrapper>
  );
};

export default ServiceCard;
