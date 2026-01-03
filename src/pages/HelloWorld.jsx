import TextBlock from "../components/TextBlock.jsx";
import CommentsBlock from "../components/CommentsBlock.jsx";
import FormBlock from "../components/FormBlock.jsx";

const HelloWorld = () => {
  const sections = [{"type":"TextBlock","heading":"","body":"[Skip to content](https://metricpcm.com/hello-world/#content)\n\nWelcome to WordPress. This is your first post. Edit or delete it, then start writing!","images":[]},{"type":"CommentsBlock","heading":"One Response","body":"1. Hi, this is a comment.\n\n\n   To get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard.\n\n\n   Commenter avatars come from [Gravatar](https://en.gravatar.com/).\n\n\n\n\n\n   [Reply](https://metricpcm.com/hello-world/#comment-1)","images":[]},{"type":"FormBlock","heading":"Leave a Reply [Cancel reply](https://metricpcm.com/hello-world/\\#respond)","body":"Your email address will not be published.Required fields are marked *\n\nComment *\n\nName *\n\nEmail *\n\nWebsite\n\nSave my name, email, and website in this browser for the next time I comment.","images":[]}];

  return (
    <>
      <TextBlock data={sections[0]} />
      <CommentsBlock data={sections[1]} />
      <FormBlock data={sections[2]} />
    </>
  );
};

export default HelloWorld;