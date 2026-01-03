import Profile from '../components/Profile.jsx';

const JoshGelder = () => {
  const pageData = [{"type":"Profile","heading":"","body":"[Skip to content](https://metricpcm.com/team/josh-gelder/#content)\n\nJosh Gelder is an experienced people manager; a safe and detailed organiser with a high level of experience delivering complex mining construction projects. Over 10 years, Josh has developed extensive project knowledge across many sites for multiple tier 1,2 and 3 companies.\n\nJosh is a qualified mechanical tradesman with applied knowledge in all aspects of structural, mechanical, and piping. He has several years’ experience conducting onsite supervision and coordination for large projects within these disciplines.\n\nJosh is studying a Diploma in Project Management and is looking forward to contributing to the development and growth of the business.","images":[]}];

  return (
    <>
      {pageData.map((section, index) => {
        switch (section.type) {
          case 'Profile':
            return <Profile key={index} data={section} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default JoshGelder;