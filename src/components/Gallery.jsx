/**
 * A component to display a gallery of images in a responsive grid.
 * @param {{ data: { heading?: string, images?: { src: string, alt: string }[] } }} props
 */
const Gallery = ({ data }) => {
  return (
    <div className="py-12 px-4">
      {data?.heading && (
        <h2 className="text-3xl font-bold font-heading text-primary text-center mb-8 min-h-[40px]">
          {data?.heading}
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.images?.map((image, index) => image && (
          <div key={index} className="aspect-square rounded overflow-hidden shadow-md">
            <img
              src={image?.src || image || ''}
              alt={image.alt || 'Gallery image'}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;