import React from 'react';
import TextBlock from '../components/TextBlock.jsx';

const GeorgiaEast = () => {
  const pageData = [{"type":"TextBlock","heading":"","body":"[Skip to content](https://metricpcm.com/team/georgia-east/#content)","images":[]},{"type":"TextBlock","heading":"","body":"Coming Soon","images":[]}];

  const componentMap = {
    TextBlock,
  };

  return (
    <>
      {pageData.map((section, index) => {
        const Component = componentMap[section.type];
        if (!Component) {
          return null;
        }
        return <Component key={index} data={section} />;
      })}
    </>
  );
};

export default GeorgiaEast;