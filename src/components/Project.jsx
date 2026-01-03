/**
 * A card to showcase a single project.
 * @param {{ data: { heading?: string, body?: string, images?: string[], tags?: string[], url?: string } }} props
 */
const Project = ({ data }) => {
  return (
    <div className="bg-background rounded shadow-lg overflow-hidden">
       {data?.images?.[0] && (
        <div className="w-full h-[250px]">
          <img 
            src={data?.images[0]} 
            alt={data?.heading || 'Project image'} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {data?.heading && (
          <h3 className="text-2xl font-bold font-heading text-primary mb-2 min-h-[32px]">
            {data?.heading}
          </h3>
        )}
        {data?.body && (
          <p className="font-body text-text-main mb-4 min-h-[60px] line-clamp-3">
            {data?.body}
          </p>
        )}
        {data?.tags && data?.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {data?.tags.map((tag, index) => tag && (
              <span key={index} className="bg-primary/10 text-primary text-sm font-heading px-3 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
         {data?.url && (
          <a href={data?.url} className="font-bold font-heading text-primary hover:underline">
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;