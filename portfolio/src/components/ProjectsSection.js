import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const githubUrl = "https://github.com/TejoVarma"
const projects = [
  {
    title: "Car Rental App",
    description: "App which helps you to rent a car for journey or if you want to collab with company you have admin pages to post your cars. This application is done by using React,NodeJs,ExpressJs,MongoDb as database.",
    sourceUrl: "https://github.com/TejoVarma/MILES-CAR-RENTAL",
    workingUrl: "https://miles-car-rental-tejovarma.vercel.app/",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "InstaClone(Photo Sharing App)",
    description:"An application where you can share you moments in the form of images. I created this application using various technologies including React, NodeJs, MongoDB and cloudinary for storing the images. Uploading of videos will be available in future version of this app.",
    sourceUrl: "https://github.com/TejoVarma/INSTACLONE-FULLSTACK",
    workingUrl: "https://instaclone-fullstack-tejo-tejovarma.vercel.app/",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Rock-Paper-Scissors",
    description:"It is a small working game of rock-paper-scissors which was created using HTML,CSS and vanilla JS. This application is done with responsive web design.",
    sourceUrl: "https://github.com/TejoVarma/ROCK-PAPER-SCISSORS",
    workingUrl: "https://rock-paper-scissors-tejovarma.vercel.app/",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Movie Search App",
    description:"A simple application created using HTML,CSS,Responsive Web Design and vanilla Js to search and find the info of the movie of your choice",
    sourceUrl: "https://github.com/TejoVarma/MOVIE-SEARCH-APP",
    workingUrl: "https://movie-search-app-tejovarma.vercel.app/",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            sourceUrl={project.sourceUrl}
            workingUrl={project.workingUrl}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
      <p style={{textAlign : "center", fontSize : "20px", fontWeight : "500"}}>There are many more projects in <a href={githubUrl} target="_blank" rel="noopener noreferrer"><span style={{textDecoration: "underline"}}>MyGitHub</span></a>. Feel free to check them as well...</p>
    </FullScreenSection>
  );
};

export default ProjectsSection;
