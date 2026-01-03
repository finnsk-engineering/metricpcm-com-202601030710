/**
 * Displays a full article with a heading, an optional main image, and a body.
 * @param {{ data: { heading?: string, body?: string, images?: string[] } }} props
 */
const Article = ({ data }) => {
  return (
    <article className="bg-background text-text-main p-8 font-body">
      <div className="max-w-4xl mx-auto">
        {data?.heading && (
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6 min-h-[56px]">
            {data?.heading}
          </h1>
        )}
        {data?.images?.[0] && (
          <div className="mb-6 rounded overflow-hidden">
            <img
              src={data?.images[0]}
              alt={data?.heading || 'Article image'}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        )}
        {data?.body && (
          <p className="whitespace-pre-line text-lg leading-relaxed min-h-[100px]">
            {data?.body}
          </p>
        )}
      </div>
    </article>
  );
};

export default Article;