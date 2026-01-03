/**
 * A component to display a user or team member profile.
 * @param {{ data: { name?: string, title?: string, body?: string, images?: string[], socialLinks?: { platform: string, url: string }[] } }} props
 */
const Profile = ({ data }) => {
  return (
    <div className="bg-background p-6 rounded shadow-lg text-center flex flex-col items-center">
      {data?.images?.[0] && (
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary">
          <img
            src={data?.images[0]}
            alt={data?.name || 'Profile picture'}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {data?.name && (
        <h3 className="text-2xl font-bold font-heading text-primary min-h-[32px]">{data?.name}</h3>
      )}
      {data?.title && (
        <p className="font-heading text-text-main mb-3 min-h-[20px]">{data?.title}</p>
      )}
      {data?.body && (
        <p className="font-body text-text-main mb-4 min-h-[60px]">{data?.body}</p>
      )}
      {data?.socialLinks && (
         <div className="flex space-x-4">
            {data?.socialLinks.map((link, index) => link && (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary">
                    {/* In a real app, use an icon library here */}
                    {link.platform}
                </a>
            ))}
         </div>
      )}
    </div>
  );
};

export default Profile;