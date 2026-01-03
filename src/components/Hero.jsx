/**
 * A large hero section, typically for the top of a page.
 * @param {{ data: { heading?: string, body?: string, images?: string[], ctaText?: string, ctaUrl?: string } }} props
 */
const Hero = ({ data }) => {
  return (
    <div
      className="relative bg-primary text-white flex items-center justify-center text-center p-8 md:p-16 rounded"
      style={{
        backgroundImage: data?.images?.[0] ? `url(${data?.images[0]})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-50 rounded"></div>
      
      <div className="relative z-10 max-w-4xl">
        {data?.heading && (
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 min-h-[64px]">
            {data?.heading}
          </h1>
        )}
        {data?.body && (
          <p className="text-lg md:text-xl font-body whitespace-pre-line mb-8 min-h-[50px]">
            {data?.body}
          </p>
        )}
        {data?.ctaText && data?.ctaUrl && (
          <a
            href={data?.ctaUrl}
            className="inline-block bg-white text-primary font-bold font-heading py-3 px-8 rounded hover:bg-gray-200 transition-colors"
          >
            {data?.ctaText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;