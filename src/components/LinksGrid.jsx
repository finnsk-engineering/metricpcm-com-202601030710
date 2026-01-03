/**
 * Displays a grid of links, useful for sitemaps or resource pages.
 * @param {{ data: { heading?: string, links?: { text: string, url: string }[] } }} props
 */
const LinksGrid = ({ data }) => {
  return (
    <div className="p-8">
      {data?.heading && (
        <h2 className="text-3xl font-bold font-heading text-primary mb-6 min-h-[40px]">
          {data?.heading}
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.links?.map((link, index) => link && (
          <a
            key={index}
            href={link.url}
            className="font-body text-primary p-3 bg-gray-100 rounded hover:bg-primary hover:text-white transition-colors"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksGrid;