/**
 * A component to display a customer testimonial.
 * @param {{ data: { body?: string, author?: string, title?: string, images?: string[] } }} props
 */
const Testimonial = ({ data }) => {
  return (
    <div className="bg-gray-100 p-8 rounded text-center">
      <div className="max-w-2xl mx-auto">
        {data?.body && (
          <blockquote className="font-body text-xl italic text-text-main mb-6 min-h-[80px]">
            "{data?.body}"
          </blockquote>
        )}
        <div className="flex items-center justify-center">
          {data?.images?.[0] && (
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
              <img
                src={data?.images[0]}
                alt={data?.author || 'Author'}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div>
            {data?.author && (
              <p className="font-bold font-heading text-primary">{data?.author}</p>
            )}
            {data?.title && (
              <p className="font-body text-text-main text-sm">{data?.title}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;