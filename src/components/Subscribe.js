import React, { useState, useRef } from 'react';
import { trackGoal } from 'fathom-client';
import {
  
  InputGroup,
  
  Input,
  InputRightElement,
  Button,
  Text,
  useToast,
  useColorMode
} from '@chakra-ui/core';
import { SubscribeWrapper, P, H2 } from "../elements";


export const Subscribe = () => {

  return (
    <SubscribeWrapper>
     <form netlify name="contact"
     method="POST" 
     data-netlify="true" 
     data-netlify-honeypot="bot-field"
     action="https://cwmoon.com"
     >
    <input 
    type="hidden" 
    name="form-name" 
    value="contact" />

     <H2>
    Subscribe to the newsletter
      </H2>
      <P>
        Get emails from me about web development, tech, and early access to new
        articles.
      </P>
      <InputGroup size="md" mt={4}>
        <Input
            name="email"
            id="email"
            type="email"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'Enter your Email'"
            placeholder="Enter your Email"
        />
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
    </SubscribeWrapper>
  );
};


