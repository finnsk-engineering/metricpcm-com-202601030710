/**
 * Displays a list of features, often in a grid.
 * @param {{ data: { heading?: string, features?: { name: string, description: string }[] } }} props
 */
const FeatureList = ({ data }) => {
  return (
    <div className="py-12 px-4">
      {data?.heading && (
        <h2 className="text-3xl font-bold font-heading text-primary text-center mb-8 min-h-[40px]">
          {data?.heading}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data?.features?.map((feature, index) => feature && (
          <div key={index} className="bg-background p-6 rounded shadow-sm">
            <h3 className="text-xl font-bold font-heading text-primary mb-2 min-h-[28px]">
              {feature.name}
            </h3>
            <p className="font-body text-text-main min-h-[60px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;