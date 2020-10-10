import React, { useState, useRef } from 'react';
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from '@chakra-ui/core';
import { SubscribeWrapper, P, H2 } from "../elements";


export const Subscribe = () => {

  return (
    <SubscribeWrapper>
    <H2>
    Subscribe to the newsletter
      </H2>
      <P>
        Get emails from me about web development, tech, and early access to new
        articles.
      </P>
      <form netlify name="contact"
          method="POST" 
          data-netlify-honeypot="bot-field"
          onSubmit="submit"
          action="https://cwmoon.com"
        >
        <input 
        type="hidden" 
        name="form-name" 
        value="contact" />
      <InputGroup size="md" mt={4}>
        <input
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


