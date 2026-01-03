/**
 * A section to display a collection of logos (clients, partners, etc.).
 * @param {{ data: { heading?: string, logos?: { src: string, alt: string }[] } }} props
 */
const LogoCloud = ({ data }) => {
  return (
    <div className="bg-background py-16">
      <div className="max-w-6xl mx-auto px-4">
        {data?.heading && (
          <h2 className="text-2xl font-bold font-heading text-center text-text-main mb-8 min-h-[32px]">
            {data?.heading}
          </h2>
        )}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {data?.logos?.map((logo, index) => logo && (
            <div key={index} className="h-12 flex items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;