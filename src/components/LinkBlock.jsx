/**
 * A clickable block component that links to a URL.
 * @param {{ data: { heading?: string, body?: string, url?: string } }} props
 */
const LinkBlock = ({ data }) => {
  if (!data?.url) {
    return null; // Don't render if there's no URL to link to
  }

  return (
    <a
      href={data?.url}
      className="block bg-background p-6 rounded border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300"
    >
      {data?.heading && (
        <h3 className="text-xl font-bold font-heading text-primary mb-2 min-h-[28px]">
          {data?.heading}
        </h3>
      )}
      {data?.body && (
        <p className="font-body text-text-main whitespace-pre-line min-h-[40px]">
          {data?.body}
        </p>
      )}
    </a>
  );
};

export default LinkBlock;