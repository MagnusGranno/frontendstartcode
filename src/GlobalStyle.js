import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
  --fs-900: 9.375rem;
  --fs-800: 6.25rem;
  --fs-700: 3.5rem;
  --fs-600: 2rem;
  --fs-500: 1.75rem;
  --fs-400: 1.125rem;
  --fs-300: 1rem;
  --fs-200: 0.875rem;
  --primary-color: 0, 0%, 11%;
  --secondary-color: 122, 39%, 49%;
}


* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
body {
    margin: 0;
    padding: 0;


    overflow-y: scroll;
    overflow-x: hidden;
    
    h1 {
        font-size: var(--fs-700);
        font-weight: 600;
        
    }
    h3 {
        font-size: var(--fs-500);
        font-weight: 600;

    }
    p {
        font-size: var(--fs-300);
    }
    a {
    text-decoration: none;
    color: white;
    padding: 0;
  }
  .active {
   color: hsl(var(--secondary-color));
  }
}

`;
