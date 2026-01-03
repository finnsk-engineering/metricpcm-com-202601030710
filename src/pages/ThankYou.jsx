import TextBlock from "../components/TextBlock.jsx";

const pageData = [{"type":"TextBlock","heading":"Thank You","body":"[Skip to content](https://metricpcm.com/contact-us/thank-you/#content)\n\n## Thank you for your message\n\nYour message was submitted successfully. One of our staff will be in touch soon.\n\n[Back to Homepage](https://metricpcm.com/)","images":[]}];

const ThankYou = () => {
  return (
    <>
      {pageData.map((section, index) => {
        switch (section.type) {
          case "TextBlock":
            return <TextBlock key={index} data={section} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default ThankYou;