/**
 * A simple block for a heading and a paragraph of text.
 * @param {{ data: { heading?: string, body?: string } }} props
 */
const TextBlock = ({ data }) => {
  return (
    <div className="bg-background text-text-main p-8 rounded">
      <div className="max-w-3xl mx-auto">
        {data?.heading && (
          <h2 className="text-3xl font-bold font-heading text-primary mb-4 min-h-[40px]">
            {data?.heading}
          </h2>
        )}
        {data?.body && (
          <p className="font-body text-lg leading-relaxed whitespace-pre-line min-h-[100px]">
            {data?.body}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextBlock;