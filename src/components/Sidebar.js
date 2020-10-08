import React, { useState, useRef } from 'react';
import { trackGoal } from 'fathom-client';
import {
  InputGroup,
  Input,
  Button,
  Text,
  useToast,
  useColorMode
} from '@chakra-ui/core';
import { SidebarWrapper, P, H2 } from "../elements"

export const Sidebar= () => {
  const [loading, setLoading] = useState(false);
  const inputEl = useRef(null);
  const toast = useToast();
  const { colorMode } = useColorMode();


  const Sidebar = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    setLoading(false);
    const { error } = await res.json();

    if (error) {
      toast({
        title: 'An error occurred.',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true
      });

      return;
    }

    trackGoal('JYFUFMSF', 0);
    inputEl.current.value = '';
    toast({
      title: 'Success!',
      description: 'You are now subscribed.',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  return (
    <SidebarWrapper>
      <H2>
        Subscribe to the newsletter
      </H2>
      <P>
        Get emails from me about web development, tech, and early access to new
        articles.
      </P>
      <InputGroup size="large" mt={4}>
        <Input
          aria-label="Email for newsletter"
          placeholder="tim@apple.com"
          ref={inputEl}
          type="email"
        />
        {/* <InputRightElement width="6.75rem" height="1rem" pr="0rem">
          <Button
            isLoading={loading}
            fontWeight="bold"
            h="1.75rem"
            size="sm"
            onClick={subscribe}
          >
            Subscribe
          </Button> */}
         {/* </InputRightElement> */} 
      </InputGroup>
    {/* </Box> */}
    </SidebarWrapper>
  );
};

