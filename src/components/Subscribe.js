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
  // const [loading, setLoading] = useState(false);
  // const inputEl = useRef(null);
  // const toast = useToast();
  // const { colorMode } = useColorMode();
  // const bgColor = {
  //   light: 'blue.50',
  //   dark: 'awblue.900'
  // };
  // const borderColor = {
  //   light: 'blue.200',
  //   dark: 'blue.900'
  // };

  // const subscribe = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   const res = await fetch('/api/subscribe', {
  //     body: JSON.stringify({
  //       email: inputEl.current.value
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'POST'
  //   });

  //   setLoading(false);
  //   try {

  //       const { error } = await res.json();
    
  //       console.log("ouch2")
    
    
  //       if (error) {
  //         toast({
  //           title: 'An error occurred.',
  //           description: error,
  //           status: 'error',
  //           duration: 3000,
  //           isClosable: true
  //         });
    
  //         return;
  //       }
    
  //      // trackGoal('JYFUFMSF', 0);
  //       inputEl.current.value = '';
  //       toast({
  //         title: 'Success!',
  //         description: 'You are now subscribed.',
  //         status: 'success',
  //         duration: 3000,
  //         isClosable: true
  //       });

  //     } 
  //     catch (error) {
          
  //       toast({
  //           title: 'An error occurred.',
  //           description: "error.message.rejectedresponse",
  //           status: 'error',
  //           duration: 3000,
  //           isClosable: true
  //         });

  //       console.error(error);
  //     }
  
  // };
  //   setLoading(false);
  //   const { error } = await res.json();

  //   if (error) {
  //     toast({
  //       title: 'An error occurred.',
  //       description: error,
  //       status: 'error',
  //       duration: 3000,
  //       isClosable: true
  //     });

  //     return;
  //   }

  //   trackGoal('JYFUFMSF', 0);
  //   inputEl.current.value = '';
  //   toast({
  //     title: 'Success!',
  //     description: 'You are now subscribed.',
  //     status: 'success',
  //     duration: 3000,
  //     isClosable: true
  

  return (
    <SubscribeWrapper>
     <form 
     name="contact" 
     method="POST" 
     data-netlify="true" 
     data-netlify-honeypot="bot-field"
     action="https://aashni.me/confirm"
     >
    <input type="hidden" name="form-name" value="contact" />

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


