import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource-variable/inter';
// Supports weights 200-800
import '@fontsource-variable/bricolage-grotesque';

const theme= extendTheme({
  fonts: {
    heading: "Bricolage Grotesque Variable, sans-serif",
    body: "Inter Variable, sans-serif",
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  </React.StrictMode>
);


