import Hero from "../components/Hero.jsx";
import TextBlock from "../components/TextBlock.jsx";
import CallToAction from "../components/CallToAction.jsx";

const OwnerRepresentation = () => {
  const pageData = [{"type":"Hero","heading":"Owner Representation","body":"### PROVIDING INTEGRATED OWNERS PROJECT MANAGEMENT TEAMS TO DELIVER PROJECTS ON THE CLIENT’S BEHALF\n\nProject owners may lack the time and experience to oversee a project. As Owners Representatives, we act as a liaison between the project owner and the project manager. We oversee the entire project, ensuring the owner’s best interests are carried out.\n\nThis service is ideal for ensures the project is delivered on time and on budget – and may include myriad services such as project cost control and quality oversight, risk mitigation and early identification, schedule performance monitoring, stakeholder reporting and communication. The Owners Representative will communicate throughout the project, using technology to provide real time project updates to stakeholders.","images":["https://metricpcm.com/wp-content/uploads/IMG_0201-1050x1400.jpg"]},{"type":"TextBlock","heading":"WE OFFER THE FOLLOWING CONTRACT MANAGEMENT SERVICES:","body":"- Competitively tendering and contract negotiation\n- Cost control, scheduling\n- Tender preparation and evaluation, client representation","images":[]},{"type":"TextBlock","heading":"AS OWNERS REPRESENTATIVES, WE ACT AS THE LIAISON BETWEEN THE PROJECT OWNER AND THE PROJECT MANAGER — ENSURING THE PROJECT IS DELIVERED ON TIME AND ON BUDGET.","body":"","images":[]},{"type":"CallToAction","heading":"GET STARTED WITH METRIC PCM","body":"If you’re in mining or heavy industry and require efficient, competitive project management services, contact us on [1300 MET PCM](tel:1300638726).\n\n[Contact](https://metricpcm.com/contact-us/)","images":["https://metricpcm.com/wp-content/uploads/IMG_2670-1400x1050.jpeg"]}];

  return (
    <>
      {pageData.map((section, index) => {
        switch (section.type) {
          case "Hero":
            return <Hero key={index} data={section} />;
          case "TextBlock":
            return <TextBlock key={index} data={section} />;
          case "CallToAction":
            return <CallToAction key={index} data={section} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default OwnerRepresentation;
