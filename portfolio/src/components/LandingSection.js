import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Tejo Varma Alluri";
const bio1 = "A Full-Stack Developer";
const bio2 = "Specialised in MERN stack technology";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    {/* The UI for the landing section */}
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Avatar src="./IMG_0846.JPG" height="200px" width="200px" name="Tejo" />
        <Heading as="h4" size="md" noOfLines={1}>{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h1" size="4xl" noOfLines={1}>{bio1}</Heading>
        <Heading as="h1" size="xl" noOfLines={1}>{bio2}</Heading>
        <Heading textAlign="justify" as="p" size="l" noOfLines={3}> A self-driven individual with a passion for problem-solving and programming. Experience in languages such as JavaScript, HTML, CSS, and have experience working with frameworks such as React and NodeJs. I’m passionate about building software solutions that solve real-world problems and am always looking for new challenges. Experience in data structures and algorithms and aspire to make a career in software engineering with a focus on
          full-stack development.</Heading>
      </VStack>
    </VStack>
    {/* The UI for the landing section */}
  </FullScreenSection>
);

export default LandingSection;
