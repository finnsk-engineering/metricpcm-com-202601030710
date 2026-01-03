import React from 'react';
import Hero from '../components/Hero.jsx';
import Gallery from '../components/Gallery.jsx';
import TextBlock from '../components/TextBlock.jsx';
import CallToAction from '../components/CallToAction.jsx';

const PortfolioManagement = () => {
  const sections = [
    {
      "type": "Hero",
      "heading": "PORTFOLIO MANAGEMENT",
      "body": "Driving productivity and cost efficiencies, Project Portfolio Management (PPM) provides a holistic approach to the management of all programs, projects and sub portfolios being undertaken by organisations.\n\nWhen there are multiple CAPEX projects underway, Metric PCM can provide centralised management of all elements – from design, approvals, managing procurement, onsite project execution, supply chain management and operational handover. Portfolio Management ensures that projects are reviewed to prioritise resource allocation, and that the management of the portfolio is aligned to the overall business objectives.",
      "images": []
    },
    {
      "type": "Gallery",
      "heading": "",
      "body": "",
      "images": [
        "https://metricpcm.com/wp-content/uploads/Mt-ISA-1400x788.jpg",
        "https://metricpcm.com/wp-content/uploads/DSCF5309-933x1400.jpg"
      ]
    },
    {
      "type": "TextBlock",
      "heading": "OUR PORTFOLIO MANAGEMENT SERVICES INCLUDE:",
      "body": "- Management of portfolio scope to align with strategic organisational objectives\n- Continuous monitoring of broader internal and external environment\n- Creation and maintenance of appropriate processes and communication\n- Management / co-ordination of all programs or project staff\n- Monitoring of resource allocation, strategic changes, risk and performance results",
      "images": []
    },
    {
      "type": "TextBlock",
      "heading": "PROJECT PORTFOLIO MANAGEMENT HAS NUMEROUS BENEFITS:",
      "body": "- Increased efficiency across multiple projects\n- Project Management Systems integration\n- Conformance to client management & reporting practices\n- Compatability of spares & equipment procurement\n- Improved project risk awareness",
      "images": []
    },
    {
      "type": "CTA",
      "heading": "GET STARTED WITH METRIC PCM",
      "body": "If you’re in mining or heavy industry and require efficient, competitive project management services, contact us on [1300 MET PCM](tel:1300638726).\n\n[Contact](https://metricpcm.com/contact-us/)",
      "images": [
        "https://metricpcm.com/wp-content/uploads/Getting-Started-with-Metric-PCM-Image.jpg"
      ]
    }
  ];

  return (
    <>
      <Hero data={sections[0]} />
      <Gallery data={sections[1]} />
      <TextBlock data={sections[2]} />
      <TextBlock data={sections[3]} />
      <CallToAction data={sections[4]} />
    </>
  );
};

export default PortfolioManagement;
