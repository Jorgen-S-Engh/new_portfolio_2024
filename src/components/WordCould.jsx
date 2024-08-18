import React from "react";
import ReactWordCloud from "react-d3-cloud";
import { Box } from "@mui/material";

const data = [
  { text: "HTML5", value: 1200 },
  { text: "CSS3", value: 1200 },
  { text: "JavaScript", value: 1200 },
  { text: "TypeScript", value: 300 },
  { text: "Python", value: 200 },
  { text: "React.js", value: 1200 },
  { text: "Vue.js", value: 200 },
  { text: "Remix.js", value: 500 },
  { text: "Redux", value: 200 },
  { text: "Tenstack", value: 200 },
  { text: "Query", value: 200 },
  { text: "Zustand", value: 200 },
  { text: "Bootstrap", value: 500 },
  { text: "Sass", value: 700 },
  { text: "Tailwind", value: 600 },
  { text: "MUI", value: 400 },
  { text: "Shadcn", value: 300 },
  { text: "Bootstrap for React", value: 200 },
  { text: "UI", value: 400 },
  { text: "UX", value: 400 },
  { text: "Webdesign", value: 500 },
  { text: "Git", value: 400 },
  { text: "GitHub", value: 300 },
  { text: "REST-API", value: 400 },
  { text: "GraphQL", value: 200 },
  { text: "Jest", value: 200 },
  { text: "Cypress", value: 200 },
  { text: "CMS", value: 400 },
  { text: "Headless CMS", value: 200 },
  { text: "Express.js", value: 200 },
  { text: "Node.js", value: 200 },
];

function WordCloud() {
  return (
    <Box>
      <div style={{ width: 450, marginTop: "-75px" }}>
        <ReactWordCloud
          data={data}
          rotate={0}
          fill={"#aaaaaaa7"}
          font={"Poppins"}
          padding={5}
        />
      </div>
    </Box>
  );
}

export default WordCloud;
