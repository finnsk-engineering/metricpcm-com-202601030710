/**
 * A block of text followed by a bulleted list.
 * @param {{ data: { heading?: string, body?: string, listItems?: string[] } }} props
 */
const TextBlockWithList = ({ data }) => {
  return (
    <div className="bg-background text-text-main p-8 rounded">
      <div className="max-w-3xl mx-auto">
        {data?.heading && (
          <h2 className="text-3xl font-bold font-heading text-primary mb-4 min-h-[40px]">
            {data?.heading}
          </h2>
        )}
        {data?.body && (
          <p className="font-body text-lg leading-relaxed whitespace-pre-line mb-6 min-h-[80px]">
            {data?.body}
          </p>
        )}
        {data?.listItems && data?.listItems.length > 0 && (
          <ul className="list-disc list-inside space-y-2 font-body text-lg">
            {data?.listItems.map((item, index) => item && (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TextBlockWithList;