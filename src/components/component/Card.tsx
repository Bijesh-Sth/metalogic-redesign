const Card = ({
  title,
  description,
  imageSrc,
  buttonText,
  buttonLink,
}: {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  buttonLink: string;
}) => {
  return (
    <div className="relative w-72 h-72 border bg-card text-card-foreground shadow mx-2 my-4 overflow-hidden inline-block rounded-lg">
      {/* Image */}
      <div className="relative w-full h-full bg-gradient-to-r from-green-400 to-green-100 rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-105 p-4">
        <div className="relative overflow-hidden w-full h-full">
          <img className="w-full h-full transition-opacity duration-300 opacity-100 hover:opacity-0" src={imageSrc} alt={title} />
        </div>
        {/* Description Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-sm font-bold">{title}</h1>
          <p className="text-xs py-2">{description}</p>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border bg-transparent shadow-sm h-7 px-2 py-1 border-secondary-300 text-secondary-300 transition-all duration-500 hover:bg-secondary-300 hover:text-white">
            <a aria-label={`Learn more about ${title}`} className="flex items-center gap-1" href={buttonLink}>
              {buttonText}
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
