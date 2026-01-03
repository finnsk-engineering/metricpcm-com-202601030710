import Article from "../components/Article.jsx";

const Uncategorised = () => {
  const sections = [{"type":"Article","heading":"Hello world!","body":"Welcome to WordPress. This is your first post. Edit or delete it, then start writing!","images":[]}];

  return (
    <>
      {sections.map((section, index) => {
        if (section.type === 'Article') {
          return <Article key={index} data={section} />;
        }
        return null;
      })}
    </>
  );
};

export default Uncategorised;