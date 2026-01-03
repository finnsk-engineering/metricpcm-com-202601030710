/**
 * A reusable form component. Handles text, email, and textarea fields.
 * @param {{ data: { heading?: string, body?: string, fields?: { name: string, label: string, type: string, placeholder?: string }[], submitText?: string } }} props
 */
const FormBlock = ({ data }) => {
  return (
    <div className="bg-background p-8 rounded shadow-md">
      {data?.heading && (
        <h2 className="text-3xl font-bold font-heading text-primary mb-2 min-h-[40px]">{data?.heading}</h2>
      )}
      {data?.body && (
        <p className="font-body text-text-main mb-6 min-h-[20px]">{data?.body}</p>
      )}
      <form className="space-y-6">
        {data?.fields?.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-bold font-heading text-text-main mb-2">
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                rows="4"
                placeholder={field.placeholder || ''}
                className="w-full p-3 font-body border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary transition"
              ></textarea>
            ) : (
              <input
                type={field.type || 'text'}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder || ''}
                className="w-full p-3 font-body border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-primary text-white font-bold font-heading py-3 px-6 rounded hover:bg-opacity-90 transition-colors"
        >
          {data?.submitText || 'Submit'}
        </button>
      </form>
    </div>
  );
};
// This component can be aliased as Form.jsx if needed.
export default FormBlock;