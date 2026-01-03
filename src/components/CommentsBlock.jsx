/**
 * A block to display a list of comments.
 * @param {{ data: { heading?: string, comments?: { author: string, date: string, text: string, avatar?: string }[] } }} props
 */
const CommentsBlock = ({ data }) => {
  return (
    <div className="bg-gray-50 p-8 rounded">
      {data?.heading && (
        <h2 className="text-2xl font-bold font-heading text-primary mb-6 min-h-[32px]">
          {data?.heading}
        </h2>
      )}
      <div className="space-y-6">
        {data?.comments?.map((comment, index) => comment && (
          <div key={index} className="flex items-start space-x-4 bg-background p-4 rounded shadow-sm">
            {comment.avatar && (
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={comment.avatar} 
                  alt={comment.author} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <div className="flex items-baseline space-x-2 mb-1">
                <p className="font-bold font-heading text-primary">{comment.author}</p>
                <p className="text-xs text-gray-500 font-body">{comment.date}</p>
              </div>
              <p className="font-body text-text-main min-h-[40px]">{comment.text}</p>
            </div>
          </div>
        ))}
        {!data?.comments?.length && (
            <p className="font-body text-gray-500 p-4 min-h-[50px]">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommentsBlock;