import TextBlockWithList from "../components/TextBlockWithList.jsx";
import TextBlock from "../components/TextBlock.jsx";
import CallToAction from "../components/CallToAction.jsx";

const ShutdownManagement = () => {
  const sections = [{"type":"TextBlockWithList","heading":"EFFECTIVE MANAGEMENT OF PERIODIC MAINTENANCE SHUTDOWNS AND RECURRING PARTIAL DOWNTIME","body":"Annual maintenance shutdowns require good preparation and a skilled workforce. Metric PCM ensures your shutdown is effective and well managed – as planned, on schedule and safely by providing:\n\n- A project management approach to shutdowns\n- Detailed re-commissioning strategy reducing oversight risk typically seen in general operational shutdowns.\n- Technical planning and work package development, complimentary of site-specific safe work documents and procedures to ensure minimal loss time impact\n- Test records in accordance with regulatory obligations\n- Purchase of spare parts and other supplies\n- Tasks related to site management and safety co-ordination\n- Understanding and implementation of site-specific work permits\n- Scheduling updates and final reporting","images":["https://metricpcm.com/wp-content/uploads/Metric-PCM-Shutdown-Management-Service-1296x1400.jpg"]},{"type":"TextBlock","heading":"EFFECTIVE, WELL MANAGED SHUTDOWNS — SAFELY AS PLANNED AND ON SCHEDULE.","body":"","images":[]},{"type":"CallToAction","heading":"GET STARTED WITH METRIC PCM","body":"If you’re in mining or heavy industry and require efficient, competitive project management services, contact us on [1300 MET PCM](tel:1300638726).\n\n[Contact](https://metricpcm.com/contact-us/)","images":["https://metricpcm.com/wp-content/uploads/Getting-Started-with-Metric-PCM-Image.jpg"]}];

  return (
    <>
      <TextBlockWithList data={sections[0]} />
      <TextBlock data={sections[1]} />
      <CallToAction data={sections[2]} />
    </>
  );
};

export default ShutdownManagement;