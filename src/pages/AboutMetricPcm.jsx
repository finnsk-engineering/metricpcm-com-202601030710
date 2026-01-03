import { Hero } from "../components/Hero.jsx";
import { TextBlock } from "../components/TextBlock.jsx";
import { FeatureList } from "../components/FeatureList.jsx";
import { Gallery } from "../components/Gallery.jsx";
import { LogoCloud } from "../components/LogoCloud.jsx";
import { CallToAction } from "../components/CallToAction.jsx";

const AboutMetricPcm = () => {
  const sections = [
    {
      "type": "Hero",
      "heading": "About Metric PCM",
      "body": "### STREAMLINED, INNOVATIVE, AGILE AND RESPONSIVE\n\nBased in NSW, Metric PCM provides efficient and competitive project delivery to mining, construction, and heavy industry businesses in Australia. We use proven project management practices honed from many years delivering complex brownfields infrastructure projects.",
      "images": []
    },
    {
      "type": "TextBlock",
      "heading": "ISO 9001 certification in Quality & ISO 45001 in Occupational Health & Safety",
      "body": "We have achieved certification in both ISO 9001 in Quality and ISO 45001 in Occupational Health & Safety.\n\nAchieving certification in ISO 9001 in Quality ensures our customers benefit from a strong customer focus, established and effective management, embedded processes and a commitment to continuous improvement. Certification in ISO 45001 in Occupational Health & Safety proves our commitment to generally improve occupational health and safety, to proactively eliminate hazards and reduce OH&S risks, and address OH&S management system nonconformities.",
      "images": [
        "https://metricpcm.com/wp-content/uploads/ISO-45001-Certified.png",
        "https://metricpcm.com/wp-content/uploads/ISO-9001-Certified.png"
      ]
    },
    {
      "type": "FeatureList",
      "heading": "",
      "body": "#### ON SITE AND REMOTE PROJECT DELIVERY\n\nUndertaking projects to upgrade existing operational plant requires specific knowledge and management to ensure reliability and availability.\n\n#### FULLY DOCUMENTED AND INTEGRATED PROCESSES\n\nDelivering experienced representatives with the knowledge and tools to manage all project requirements, from small day works through to shutdowns and large complex projects.\n\n#### LEAN PROJECT MANAGEMENT — HIGH VALUE\n\nMeeting the expectations of stakeholders in achieving agreed objectives that align with their business goals.\n\n#### DRONE PHOTOGRAMMETRY TECHNOLOGY\n\nWe use the latest drone photogrammetry technology, providing detailed 3Dmodeling and site layout imagery. These high definition images lead to improved understanding of the design and reduce time spent on design rework.\n\n#### WE EXCEL AT COMPLEX SURFACE INFRASTRUCTURE PROJECTS\n\nWe have particular expertise in managing projects involving precious and base metals. We are currently servicing a number of existing and emerging metalliferous projects.",
      "images": [
        "https://metricpcm.com/wp-content/uploads/Metric-PCM-Streamlined-Innovative-Agile-and-Responsive-1.jpg",
        "https://metricpcm.com/wp-content/uploads/AR%5E0JM-snip.jpeg"
      ]
    },
    {
      "type": "TextBlock",
      "heading": "THE STORY BEHIND METRIC PCM",
      "body": "James Moran and Andrew Rolfe founded Metric PCM in 2021.\n\nWith a passion for the mining industry, both James and Andrew left their hometowns of Port Macquarie and Wollongong to move to Cobar NSW for an opportunity to work in the industry. They worked at a number of sites in the Cobar basin and alongside each other as electrical and mechanical tradespeople.\n\nJames and Andrew both left Cobar to further develop their skills and expertise in mining, oil & gas and civil infrastructure projects. In 2020 they found themselves back working in Cobar.\n\nJames joined Andrew to assist with a mining infrastructure project and after the completion of the project, they both realised there was an opportunity in the market for a streamlined project management businesses to support Tier 2 operations.\n\nThe business provides these operations with a project management solution that is complimentary to the specific needs of the mining industry.",
      "images": []
    },
    {
      "type": "Gallery",
      "heading": "",
      "body": "",
      "images": [
        "https://metricpcm.com/wp-content/uploads/DSCF5299-400x600.jpg",
        "https://metricpcm.com/wp-content/uploads/DSCF5281-400x600.jpg",
        "https://metricpcm.com/wp-content/uploads/DSCF5309-400x600.jpg"
      ]
    },
    {
      "type": "TextBlock",
      "heading": "",
      "body": "#### A SMARTER, MORE STREAMLINED APPROACH TO PROJECT MANAGEMENT\n\nMany projects are often managed end to end by Engineers. James and Andrew felt a smarter, more streamlined approach to project management would provide greater value for clients.\n\nMost components can be managed by skilled Project Managers with hands on industry experience. Specialist engineers are only engaged when needed. This streamlined approach results in cost efficiencies and higher return on investment for clients.\n\n#### Metric PCM is Founded\n\nJames and Andrew spent a good part of 12 months working on planning and developing Metric PCM to fulfil its goals of being a quality service provider. In the first year of operation, they have grown their core team to 5 employees and are now supporting several clients across the industry.",
      "images": []
    },
    {
      "type": "LogoCloud",
      "heading": "Our Partners",
      "body": "We have developed strategic alliances with a range of businesses that are proven and highly experienced across mining, heavy industry and construction.",
      "images": [
        "https://metricpcm.com/wp-content/uploads/Logo-Site-Train.png",
        "https://metricpcm.com/wp-content/uploads/Logo-Marlanda.png",
        "https://metricpcm.com/wp-content/uploads/Logo-MRS.png",
        "https://metricpcm.com/wp-content/uploads/Logo-Tri-Dimensional.png"
      ]
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
      <TextBlock data={sections[1]} />
      <FeatureList data={sections[2]} />
      <TextBlock data={sections[3]} />
      <Gallery data={sections[4]} />
      <TextBlock data={sections[5]} />
      <LogoCloud data={sections[6]} />
      <CallToAction data={sections[7]} />
    </>
  );
};

export default AboutMetricPcm;
