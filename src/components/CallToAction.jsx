/**
 * A prominent block to encourage a user action. Aliases CTA.
 * @param {{ data: { heading?: string, body?: string, buttonText?: string, buttonUrl?: string } }} props
 */
const CallToAction = ({ data }) => {
  return (
    <div className="bg-primary text-white p-12 rounded text-center">
      <div className="max-w-3xl mx-auto">
        {data?.heading && (
          <h2 className="text-3xl font-bold font-heading mb-4 min-h-[40px]">
            {data?.heading}
          </h2>
        )}
        {data?.body && (
          <p className="font-body text-lg mb-8 min-h-[50px]">
            {data?.body}
          </p>
        )}
        {data?.buttonText && data?.buttonUrl && (
          <a
            href={data?.buttonUrl}
            className="inline-block bg-white text-primary font-bold font-heading py-3 px-10 rounded hover:bg-gray-200 transition-colors"
          >
            {data?.buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

// You can create a CTA.jsx that just re-exports this if needed.
// export { default as CTA } from './CallToAction';
export default CallToAction;