import Hero from '../components/Hero.jsx';
import TextBlock from '../components/TextBlock.jsx';
import CallToAction from '../components/CallToAction.jsx';

const CommissioningManagement = () => {
  const sections = [{"type":"Hero","heading":"Commissioning Management","body":"### WE OFFER EFFECTIVE COMMISSIONING MANAGEMENT WITH AN UNCOMPROMISED APPROACH TO SAFETY AND A FOCUS ON OPERATIONAL READINESS.\n\nWorking with client programs or developing unique commissioning plans, we can effectively implement commissioning activities around business requirements to ensure:\n\n- Plant availability is maximised\n- Shutdown requirements for commissioning activities are streamlined and well managed\n- Commissioning schedules are developed in line with construction and operational objectives\n- Effective management of commissioning teams, systems and safety through to completion","images":["https://metricpcm.com/wp-content/uploads/Metric-PCM-Commissioning-Management-Service.jpg"]},{"type":"TextBlock","heading":"WE USE STREAMLINED DIGITAL TOOLS THAT SUPPORT THE COMMISSIONING PROCESS, ENABLING US TO EFFECTIVELY DEVELOP AND MANAGE:","body":"- Inspection and Test Plans\n- Inspection and Test Records\n- Factory Acceptance Testing\n\n- Site Acceptance Testing\n- Non-Conformity Reports\n- Plant shutdown and tie-ins","images":[]},{"type":"TextBlock","heading":"EFFECTIVE COMMISSIONING MANAGEMENT, WITH AN UNCOMPROMISED APPROACH TO SAFETY AND A FOCUS ON OPERATIONAL READINESS.","body":"","images":[]},{"type":"CTA","heading":"GET STARTED WITH METRIC PCM","body":"If you’re in mining or heavy industry and require efficient, competitive project management services, contact us on [1300 MET PCM](tel:1300638726).\n\n[Contact](https://metricpcm.com/contact-us/)","images":["https://metricpcm.com/wp-content/uploads/IMG_2670-1400x1050.jpeg"]}];

  return (
    <>
      <Hero data={sections[0]} />
      <TextBlock data={sections[1]} />
      <TextBlock data={sections[2]} />
      <CallToAction data={sections[3]} />
    </>
  );
};

export default CommissioningManagement;