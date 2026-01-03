import TextBlock from "../components/TextBlock.jsx";

const Error533 = () => {
  const sections = [{"type":"TextBlock","heading":"Origin Response Error","body":"### Your Computer\n\n## Working\n\n### CDN\n\n## Working\n\n### Origin\n\n## Error","images":[]},{"type":"TextBlock","heading":"About your request","body":"| Trace ID | 64cf6190-249f-4ae1-8bb2-538a16db6fb5 |\n| Remote IP | 195.64.115.161:38773 |\n| AssetID | c34f7cf4edf37dc7a9045e0db121adc1152504f3 |\n| DocumentID | master |","images":[]}];
  return (
    <>
      <TextBlock data={sections[0]} />
      <TextBlock data={sections[1]} />
    </>
  );
};

export default Error533;