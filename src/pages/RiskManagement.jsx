import TextBlock from '../components/TextBlock.jsx';
import ListBlock from '../components/ListBlock.jsx';
import CallToAction from '../components/CallToAction.jsx';

const RiskManagement = () => {
  const section1Data = {
    "type": "TextBlock",
    "heading": "Risk Management",
    "body": "A form of hazard identification, Hazard and Operability Studies (HAZOPs) identify potential operational issues and hazards in a project design. A HAZOP is undertaken prior to the commencement of construction and used to identify and evaluate problems that may represent risks to personnel and the environment.\n\nIt’s crucial to be proactive in identifying and evaluation complex hazards at facilities to ensure safety and environmental issues are addressed before final design, procurement and construction commences.\n\nAt the completion of the HAZOP, we will produce a detailed report outlining recommendations for any necessary modifications.",
    "images": [
      "https://metricpcm.com/wp-content/uploads/HAZOP-Studies-1.jpg",
      "https://metricpcm.com/wp-content/uploads/Hazards-Related-Assessment-Process.png"
    ]
  };

  const section2Data = {
    "type": "ListBlock",
    "heading": "WE OFFER A RANGE OF SERVICES:",
    "body": "- Offsite HAZOP preparation\n- A preliminary hazard analysis undertaken to support the development application\n- A constructability review to ensure facility safety during construction and commissioning\n- Facilitator and Minute taker completed at a nominated location\n- HAZOP Report with an Action Register\n- Action Register follow up and closure reporting",
    "images": []
  };

  const section3Data = {
    "type": "TextBlock",
    "heading": "QUANTITATIVE AND QUALITATIVE RISK ASSESSMENT",
    "body": "Both Quantitative and Qualitative Risk Assessments will help you to better prioritise and manage risk, as well as maximising your time and resources.By understanding the risk profile, you will be able to enact an appropriate risk mitigation strategy – avoidance, acceptance, reduction, or transference.\n\n#### **QUANTITATIVE RISK ASSESSMENT**\n\nOur team has extensive hands-on experience across diverse mining projects. For our Qualitative Risk Assessments, we draw upon this experience, along with interviews and workshops to determine the probability of a threat and then the potential impact on the company.We produce a qualitative risk assessment matrix (RAM), which will clearly outline the nature of potential threats and resultant possible impact.\n\n#### **QUALITATIVE RISK ASSESSMENT**\n\nOur Quantitative Risk Assessments analyses historical or current data to provide insights into the risk management process. It enables predictions to be made around potential future outcomes and informs the risk management process by detailing strategies to address any identified risks.Quantitative assessments are particularly useful for large projects requiring a complex risk management process.",
    "images": []
  };

  const section4Data = {
    "type": "ListBlock",
    "heading": "QUALITATIVE RISK ASSESSMENT",
    "body": "- Project Risk Matrixes\n- Residual Risk Matrixes for operational Plants\n\n- Risk Assessment Reports\n- Residual Risk Matrixes for operational Plants",
    "images": [
      "https://metricpcm.com/wp-content/uploads/Artboard-4@2x.png"
    ]
  };

  const section5Data = {
    "type": "CallToAction",
    "heading": "NEED MORE INFORMATION ABOUT A HAZOP ASSESSMENT?",
    "body": "Please contact us to discuss your risk management requirements: **1300 MET PCM**.",
    "images": []
  };

  const section6Data = {
    "type": "CallToAction",
    "heading": "GET STARTED WITH METRIC PCM",
    "body": "If you’re in mining or heavy industry and require efficient, competitive project management services, contact us on [1300 MET PCM](tel:1300638726).\n\n[Contact](https://metricpcm.com/contact-us/)",
    "images": [
      "https://metricpcm.com/wp-content/uploads/Getting-Started-with-Metric-PCM-Image-4.jpg"
    ]
  };

  return (
    <>
      <TextBlock data={section1Data} />
      <ListBlock data={section2Data} />
      <TextBlock data={section3Data} />
      <ListBlock data={section4Data} />
      <CallToAction data={section5Data} />
      <CallToAction data={section6Data} />
    </>
  );
};

export default RiskManagement;
