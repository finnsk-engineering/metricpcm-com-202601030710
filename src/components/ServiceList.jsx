/**
 * Displays a list of services, similar to FeatureList but with distinct styling.
 * @param {{ data: { heading?: string, services?: { name: string, description: string, images?: string[] }[] } }} props
 */
const ServiceList = ({ data }) => {
  return (
    <div className="py-12 px-4 bg-gray-50">
      {data?.heading && (
        <h2 className="text-3xl font-bold font-heading text-primary text-center mb-10 min-h-[40px]">
          {data?.heading}
        </h2>
      )}
      <div className="space-y-8 max-w-4xl mx-auto">
        {data?.services?.map((service, index) => service && (
          <div key={index} className="flex flex-col md:flex-row items-start bg-background p-6 rounded shadow">
            {service?.images?.[0] && (
              <div className="w-full md:w-1/3 h-[180px] mb-4 md:mb-0 md:mr-6 rounded overflow-hidden flex-shrink-0">
                <img src={service.images[0]} alt={service.name} className="w-full h-full object-cover"/>
              </div>
            )}
            <div>
              <h3 className="text-2xl font-bold font-heading text-primary mb-2 min-h-[32px]">
                {service.name}
              </h3>
              <p className="font-body text-text-main min-h-[60px]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;