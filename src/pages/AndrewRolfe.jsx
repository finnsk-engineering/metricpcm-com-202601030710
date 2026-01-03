import React from 'react';
import TextBlock from "../../components/TextBlock.jsx";

const AndrewRolfe = () => {
  const pageData = [{"type":"TextBlock","heading":"","body":"[Skip to content](https://metricpcm.com/team/andrew-rolfe/#content)\n\nOver a ten-year period, Andrew has successfully managed numerous mining infrastructure projects. He has been involved in the due diligence process of an acquisition of a mine site and has consistently delivered proven results and high value returns for clients.\n\nA member of the Australasian Institute of Mining and Metallurgy (AusIMM), Andrew has particular experience and expertise in managing complex projects requiring agility, collaboration, innovation and a strong commitment to stakeholder management.","images":[]}];

  return (
    <>
      {pageData.map((section, index) => {
        switch (section.type) {
          case "TextBlock":
            return <TextBlock key={index} data={section} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default AndrewRolfe;