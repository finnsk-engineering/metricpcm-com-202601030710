/**
 * Displays contact information like email, phone, and address.
 * @param {{ data: { heading?: string, email?: string, phone?: string, address?: string } }} props
 */
const ContactDetails = ({ data }) => {
  return (
    <div className="bg-gray-100 p-8 rounded">
      {data?.heading && (
        <h3 className="text-2xl font-bold font-heading text-primary mb-6 min-h-[32px]">
          {data?.heading}
        </h3>
      )}
      <div className="space-y-4 font-body text-lg">
        {data?.email && (
          <div className="flex items-center">
            <span className="mr-3 font-bold">Email:</span>
            <a href={`mailto:${data?.email}`} className="text-primary hover:underline">
              {data?.email}
            </a>
          </div>
        )}
        {data?.phone && (
          <div className="flex items-center">
            <span className="mr-3 font-bold">Phone:</span>
            <a href={`tel:${data?.phone}`} className="text-primary hover:underline">
              {data?.phone}
            </a>
          </div>
        )}
        {data?.address && (
          <div className="flex items-start">
            <span className="mr-3 font-bold flex-shrink-0">Address:</span>
            <p className="whitespace-pre-line">{data?.address}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactDetails;