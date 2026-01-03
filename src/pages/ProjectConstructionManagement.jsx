import Hero from "../../components/Hero.jsx";
import TextBlock from "../../components/TextBlock.jsx";
import CallToAction from "../../components/CallToAction.jsx";

const ProjectConstructionManagement = () => {
  const sections = [{"type":"Hero","heading":"Project & Construction Management","body":"### A NEW APPROACH TO PROJECT MANAGEMENT: AGILE. STREAMLINED. INNOVATIVE. COST-EFFECTIVE.\n\nAfter many years of hands-on project management across diverse construction and mining projects, we saw an opportunity to offer a more agile, streamlined and cost-effective project management service.\n\nMany projects are managed end to end by Engineers. However, most components can be managed by skilled Project Managers with hands on industry experience.\n\nWe use technology to gain a competitive edge and when required, we bring in Engineering expertise – keeping costs down for our customers and delivering improved Return on Investment.\n\nOur team has a focus on risk and safety management – we continually monitor for hazards and implement practical critical control measures.","images":["https://metricpcm.com/wp-content/uploads/20190829_161526.jpg","https://metricpcm.com/wp-content/uploads/DSCF5299-933x1400.jpg"]},{"type":"TextBlock","heading":"OUR PROJECT MANAGEMENT SERVICES INCLUDE:","body":"- Concept to completion commissioning, project and construction management\n- Cost control, scheduling\n- Tender preparation and evaluation, client representation\n- Capital and operating cost estimates\n- Financial evaluation\n- Procurement management and inspection\n- Construction management\n- Project maintenance\n- Engineering management\n- Logistical and transport management\n- Health, safety, environmental & quality management","images":["https://metricpcm.com/wp-content/uploads/Metric-PCM-Streamlined-Innovative-Agile-and-Responsive-1.jpg"]},{"type":"TextBlock","heading":"TRUST. INTEGRITY. DOING THE JOB WELL THE FIRST TIME","body":"We attribute our reputation in the market for project management excellence to our core values:\n\n- Instil trust by doing what we say we’re going to do\n- Work with integrity\n- Get the job done right the first time — avoid variations\n- Take responsibility – if there’s an issue, fix it","images":["https://metricpcm.com/wp-content/uploads/ISO-45001-Icon.png"]},{"type":"CallToAction","heading":"GET STARTED WITH METRIC PCM","body":"If you’re in mining or heavy industry and require efficient, competitive project management services, contact us on [1300 MET PCM](tel:1300638726).\n\n[Contact](https://metricpcm.com/contact-us/)","images":["https://metricpcm.com/wp-content/uploads/Getting-Started-with-Metric-PCM-Image-4.jpg"]}];

  const componentMap = {
    Hero,
    TextBlock,
    CallToAction,
  };

  return (
    <>
      {sections.map((section, index) => {
        const Component = componentMap[section.type];
        if (!Component) {
          return null;
        }
        return <Component key={index} data={section} />;
      })}
    </>
  );
};

export default ProjectConstructionManagement;