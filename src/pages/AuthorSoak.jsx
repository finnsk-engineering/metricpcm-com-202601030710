import LinkBlock from '../components/LinkBlock.jsx';
import ArticlePreview from '../components/ArticlePreview.jsx';

const AuthorSoak = () => {
  const pageData = [{"type":"LinkBlock","heading":"","body":"[Skip to content](https://metricpcm.com/author/soak/#content)","images":[]},{"type":"ArticlePreview","heading":"[Hello world!](https://metricpcm.com/hello-world/)","body":"Welcome to WordPress. This is your first post. Edit or delete it, then start writing!","images":[]}];

  return (
    <>
      {pageData.map((section, index) => {
        switch (section.type) {
          case 'LinkBlock':
            return <LinkBlock key={index} data={section} />;
          case 'ArticlePreview':
            return <ArticlePreview key={index} data={section} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default AuthorSoak;