import TextBlock from "../components/TextBlock.jsx";

const DavidMorgan = () => {
  const pageData = [{"type":"TextBlock","heading":"","body":"David is an experienced and competent Project Manager and Frontline manager with over 20 years’ experience in the mining industry. David holds several High-Risk Work licenses and trade certificates which provides a broad and diverse set of skills and experience to\n\neffectively manage teams. David is a highly skilled Project Manager and Frontline manager with over 20 years’ experience in the mining industry. He has a diverse set of skills and experience to effectively manage teams. David holds several High-Risk Work licenses and trade certificates.","images":[]}];

  return (
    <>
      {pageData.map((section, index) => {
        const key = `${section.type}-${index}`;
        switch (section.type) {
          case "TextBlock":
            return <TextBlock key={key} data={section} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default DavidMorgan;