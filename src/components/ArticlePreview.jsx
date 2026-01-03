/**
 * A smaller preview card for an article, often used in a list.
 * @param {{ data: { heading?: string, body?: string, images?: string[], url?: string } }} props
 */
const ArticlePreview = ({ data }) => {
  return (
    <div className="bg-background rounded overflow-hidden shadow-md transition-shadow hover:shadow-xl">
      {data?.images?.[0] && (
        <div className="w-full h-[200px]">
          <img
            src={data?.images[0]}
            alt={data?.heading || 'Article preview'}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {data?.heading && (
          <h3 className="text-2xl font-bold font-heading text-primary mb-3 min-h-[32px]">
            {data?.heading}
          </h3>
        )}
        {data?.body && (
          <p className="font-body text-text-main whitespace-pre-line mb-4 min-h-[60px] line-clamp-3">
            {data?.body}
          </p>
        )}
        {data?.url && (
          <a href={data?.url} className="font-bold font-heading text-primary hover:underline">
            Read More
          </a>
        )}
      </div>
    </div>
  );
};

export default ArticlePreview;