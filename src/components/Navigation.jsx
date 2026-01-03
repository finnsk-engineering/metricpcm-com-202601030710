/**
 * A site header/navigation bar component.
 * @param {{ data: { logo?: { src: string, alt: string }, navLinks?: { text: string, url: string }[], cta?: { text: string, url: string } } }} props
 */
const Navigation = ({ data }) => {
  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            {data?.logo?.src && (
              <a href="/">
                <img className="h-10 w-auto" src={data?.logo.src} alt={data?.logo.alt || 'Logo'} />
              </a>
            )}
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {data?.navLinks?.map((link, index) => link && (
              <a
                key={index}
                href={link.url}
                className="font-heading text-text-main hover:text-primary transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
             {data?.cta?.text && data?.cta?.url && (
                <a 
                    href={data?.cta.url} 
                    className="bg-primary text-white font-bold font-heading py-2 px-5 rounded hover:bg-opacity-90 transition-colors"
                >
                    {data?.cta.text}
                </a>
             )}
          </div>
          {/* Add mobile menu button here if needed */}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;