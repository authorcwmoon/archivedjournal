import React from 'react';
import { SubscribeWrapper, P, H2 } from "../elements";
import {
  Box,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from '@chakra-ui/core';



export const Subscribe = () => {

  return (
    <SubscribeWrapper>
    <Box
      border="1px solid"

      borderRadius={4}
      padding={6}
      my={4}
      w="100%"
    >
    <H2>
    Subscribe to the newsletter
      </H2>
      <P>
        Get emails from me about web development, tech, and early access to new
        articles.
      </P>
      <form  
          name="contact"
          method="POST" 
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit="submit"
        >
      <InputGroup size="md" mt={4} isFullWidth="true !important">
        <Input 
          isFullWidth
          flex="1"
          class="form-control valid"
          name="email"
          id="email"
          type="email"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Enter your Email'"
          placeholder="Enter your Email"
        />
        {/* <Input 
        class="hidden" 
        name="bot-name" 
        placeholder="Don't fill this out if you're a human"/> */}
        <InputRightElement width="6.75rem" >
          <Button
            fontWeight="bold"
            type="submit"
            h="1.75rem"
            size="sm"
          >Subscribe
          </Button>
        </InputRightElement>
      </InputGroup>
      </form>
      </Box>
    </SubscribeWrapper>
  );
};


