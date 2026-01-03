import { TextBlock } from "../components/TextBlock.jsx";

const JamesMorgan = () => {
  const sections = [{"type":"TextBlock","heading":"","body":"James Moran has over 10 years’ experience in electrical, instrumentation and controls. He has extensive project experience across multiple sites and industries, including plant commissioning coordination, high value state government tunnelling projects and large complex oil & gas instrumentation roles.\n\nOver this period, James has gained significant insights into developing project efficiencies through technology and industry best practice project delivery processes.\n\nJames is focused on building robust project systems, stakeholder engagement and ensuring safe and efficient project delivery.","images":[]}];

  return (
    <>
      {sections.map((section, index) => {
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

export default JamesMorgan;
