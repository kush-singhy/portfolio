import React from "react";
import profileImage from "./assets/profile.JPG";
import { Card, Heading, Image, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <div>
      <Card borderRadius={5} padding={20} width={500}>
        <VStack>
          <Image src={profileImage} boxSize={200} borderRadius={20} />
          <Heading as="h2">Kush Singhy</Heading>
        </VStack>
      </Card>
    </div>
  );
};

export default Contact;
