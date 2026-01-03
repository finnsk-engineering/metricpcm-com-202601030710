import React from 'react';
import Hero from '../components/Hero.jsx';
import LinksGrid from '../components/LinksGrid.jsx';
import TextBlock from '../components/TextBlock.jsx';
import CallToAction from '../components/CallToAction.jsx';

const OurServices = () => {
  const sections = [{"type":"Hero","heading":"Our Services","body":"### AGILE. FLEXIBLE. INNOVATIVE   PROJECT DELIVERY\n\nWe pride ourselves on being agile, innovative and flexible in our approach to project delivery. We excel at managing complex projects that require a higher level of site experience to ensure they can be delivered in a consultative and comprehensive manner.\n\nOur aim is to make a tangible difference for our customers: improving productivity, reducing down-time and the need for repeat works, aligning our project delivery to timelines and budgets.","images":["https://metricpcm.com/wp-content/uploads/Metric-PCM-Streamlined-Innovative-Agile-and-Responsive-1.jpg"]},{"type":"LinksGrid","heading":"Our Services","body":"[Portfolio\\\n\\\nManagement](https://metricpcm.com/services/portfolio-management/)\n\n[Project & Construction\\\n\\\nManagement](https://metricpcm.com/services/project-construction-management/)\n\n[Owners\\\n\\\nRepresentation](https://metricpcm.com/services/owner-representation/)\n\n[Contract\\\n\\\nManagement](https://metricpcm.com/services/contract-management/)\n\n[Shutdown\\\n\\\nManagement](https://metricpcm.com/services/shutdown-management/)\n\n[Commissioning\\\n\\\nManagement](https://metricpcm.com/services/commissioning-management/)\n\n[Risk \\\n\\\nManagement](https://metricpcm.com/services/hazop-risk-management/)","images":[]},{"type":"TextBlock","heading":"Latest technology for streamlined project delivery","body":"Metric PCM utilises PROCORE SOFTWARE to provide a digital platform, enabling comprehensive and efficient project delivery.","images":[]},{"type":"CallToAction","heading":"GET STARTED WITH METRIC PCM","body":"If you’re in mining or heavy industry and require efficient, competitive project management services, contact us on [1300 MET PCM](tel:1300638726).\n\n[Contact](https://metricpcm.com/contact-us/)","images":["https://metricpcm.com/wp-content/uploads/Getting-Started-with-Metric-PCM-Image-5.jpg"]}];

  return (
    <>
      <Hero data={sections[0]} />
      <LinksGrid data={sections[1]} />
      <TextBlock data={sections[2]} />
      <CallToAction data={sections[3]} />
    </>
  );
};

export default OurServices;