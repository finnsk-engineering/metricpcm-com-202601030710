/**
 * A generic block for displaying a list of items with titles and descriptions.
 * @param {{ data: { heading?: string, items?: { title: string, description: string }[] } }} props
 */
const ListBlock = ({ data }) => {
  return (
    <div className="py-10 px-4">
      {data?.heading && (
        <h2 className="text-3xl font-bold font-heading text-primary text-center mb-8 min-h-[40px]">
          {data?.heading}
        </h2>
      )}
      <div className="max-w-3xl mx-auto space-y-4">
        {data?.items?.map((item, index) => item && (
          <div key={index} className="bg-background p-4 rounded border border-gray-200">
            <h4 className="font-bold font-heading text-lg text-primary min-h-[24px]">{item.title}</h4>
            <p className="font-body text-text-main min-h-[20px]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBlock;