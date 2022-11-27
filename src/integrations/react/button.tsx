/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from 'flowbite-react';
export const Chakra = qwikify$(ChakraProvider)
export const NavBar = qwikify$(Navbar)