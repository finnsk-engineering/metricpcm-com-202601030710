import Project from '../components/Project.jsx';
import CallToAction from '../components/CallToAction.jsx';

const RecentProjects = () => {
  const pageBlueprint = [{"type":"Project","heading":"STAGE 5 BROWNFIELD TAILINGS STORAGE FACILITY RAISE","body":"Civil | Owners Representatives | Peak Gold Mines, Aurelia Metals.\n\nMetric PCM was engaged to provide Owners Representative roles for a 5m perimeter and spine raise to an existing Central Discharge Tailings Storage Facility (TSF).\n\nMetric’s role included the project planning, commercial tendering, evaluation and recommendation to award, site representation and construction contract management. Metric also provided access to its information management system Procore to provide quality control/assurence processes in accordance with ISO9001 standards and requirements with the latest Dam Safety Legislation.\n\n“The Metric team provide a streamlined service, with their years of experience working in mineral processing facilities and their boots on the ground trade expertise, the service is second to none.”\n\nTodd Whitla, Aurelia Metals Ltd – Processing Manager","images":["https://metricpcm.com/wp-content/uploads/Quote-Icon.svg"]},{"type":"Project","heading":"PRE-PROJECT PLANNING (PPP): RELOCATION OF A 400tphr RECLAIM FEEDER AND CONVEYOR EXTENSION","body":"CSA Mine, Glencore.\n\nMetric PCM was engaged by CSA Glencore to provide a PPP for the relocation of an existing feeder to bypass several Run of Mine (ROM) conveyors.\n\nA key objective was to provide flexibility for ore loading into their grinding mills during maintenance downtime periods. The output from the project was a detailed Pre-Project Plan which outlined the scope, timing, cost estimates and conceptual engineering models.\n\n“Metric PCM provided project support for their SAG Mill replacement at CSA Mine. While there are always challenges with brown fields projects, I was impressed with James’ willingness to remain committed to the project regardless of the effort required. James was part of an integrated team that successfully delivered a quality outcome in a several week long, around the clock shutdown without compromising on safety. An impressive achievement that wouldn’t have been possible without his support.”\n\nGlencore – Project Manager","images":["https://metricpcm.com/wp-content/uploads/Quote-Icon.svg"]},{"type":"CTA","heading":"GET STARTED WITH METRIC PCM","body":"If you’re in mining or heavy industry and require efficient, competitive project management services, contact us on [1300 MET PCM](tel:1300638726).\n\n[Contact](https://metricpcm.com/contact-us/)","images":["https://metricpcm.com/wp-content/uploads/Getting-Started-with-Metric-PCM-Image.jpg"]}];

  return (
    <>
      {pageBlueprint.map((section, index) => {
        const key = `${section.type}-${index}`;
        switch (section.type) {
          case "Project":
            return <Project key={key} data={section} />;
          case "CTA":
            return <CallToAction key={key} data={section} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default RecentProjects;
