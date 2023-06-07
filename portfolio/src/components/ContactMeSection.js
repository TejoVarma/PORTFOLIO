import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";
import { postContact } from "../utils/api-utils";

const ContactMeSection = () => {
  const { onOpen } = useAlertContext();
  const [boo, setBoo] = useState(true);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    purpose: "HireMe",
    message: ""
  })
  const [error, setError] = useState({
    email: "",
    name: "",
    message: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (! /^[a-zA-Z ]+$/.test(contact.name)) {
      return setError(ex => ({ ...ex, name: "Name must contain alphabets only" }));
    }
    setBoo(false);
    // console.log(contact);
    postContact(contact)
      .then(res => {
        if (res.status === "Success") {
          setContact({
            name: "",
            email: "",
            purpose: "HireMe",
            message: ""
          });
          toast.success("Details submitted successfully. Will get back to you soon...", {
            position: "bottom-right"
          })
        }
        else {
          console.log(res);
          if (res.field) setError(ex => ({ ...ex, [res.field]: res.message }));
        }
      })
  }
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          {/* Connect the form onSubmit prop with Formik's handleSubmit function */}
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              {/* Show the error messages for each field when the field is touched and the validation fails */}
              <FormLabel style={{ width: "100%", margin: "10px auto" }} htmlFor="firstName">Name</FormLabel>
              <Input
                id="firstName"
                name="name"
                value={contact.name}
                style={error.name ? { border: "1px solid red" } : {}} onChange={e => {
                  setContact(ex => ({ ...ex, name: e.target.value }));
                  setError(ex => ({ ...ex, name: "" }));
                }}
              // Make the Input components from Chakra UI controlled components
              />
              {error.name && <span className="error">*{error.name}</span>}
              {/* Show the error messages for each field when the field is touched and the validation fails */}
              <FormLabel style={{ width: "100%", margin: "10px auto" }} htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                value={contact.email}
                // Make the Input components from Chakra UI controlled components
                style={error.name ? { border: "1px solid red" } : {}} onChange={e => {
                  setContact(ex => ({ ...ex, email: e.target.value }));
                  setError(ex => ({ ...ex, email: "" }));
                }}
              />
              {error.email && <span className="error">*{error.email}</span>}
              <FormLabel style={{ width: "100%", margin: "10px auto" }} htmlFor="purpose">Type of enquiry</FormLabel>
              <Select
                id="purpose"
                name="purpose"
                value={contact.purpose}
                // Make the Input components from Chakra UI controlled components
                onChange={e => {
                  setContact(ex => ({ ...ex, purpose: e.target.value }));
                  setError(ex => ({ ...ex, purpose: "" }));
                }}
              >
                <option style={{ color: "black" }} value="hireMe">HireMe</option>
                <option style={{ color: "black" }} value="other">Other</option>
              </Select>
              {/* Show the error messages for each field when the field is touched and the validation fails */}
              <FormLabel style={{ width: "100%", margin: "10px auto" }} htmlFor="message">Your message</FormLabel>
              <Textarea
                id="message"
                name="message"
                height={250}
                value={contact.message}
                style={error.name ? { border: "1px solid red" } : {}} onChange={e => {
                  setContact(ex => ({ ...ex, message: e.target.value }));
                  setError(ex => ({ ...ex, message: "" }));
                }}
              />
              {/* Show the error messages for each field when the field is touched and the validation fails */}
              {error.message && <span className="error">*{error.message}</span>}
              {/* Show a loading indicator */}
              <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
