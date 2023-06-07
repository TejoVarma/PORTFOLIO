import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, sourceUrl, workingUrl }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      color="black"
      backgroundColor="white"
      cursor="pointer"
      borderRadius="xl"
      transition="1s"
      _hover={{
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
        transform: "translateY(-10px)"
      }}
    >
      <Image height="300px" width="100%" src={imageSrc} alt={title} borderRadius="xl" />
      <VStack spacing={4} alignItems="flex-start" p={5}>
        <Heading as="h4" size="md">{title}</Heading>
        <Text color="#64748b" fontSize="lg">{description}</Text>
        <HStack fontSize="md" fontWeight="medium">
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <p style={{ textDecoration: "underline" }}>For Source Code</p>
          </a>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
        <HStack fontSize="md" fontWeight="medium">
          <a href={workingUrl} target="_blank" rel="noopener noreferrer">
            <p style={{ textDecoration: "underline" }}>Wanna Check the Website?</p>
          </a>

          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
