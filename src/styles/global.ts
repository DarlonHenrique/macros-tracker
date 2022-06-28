import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
    --body-bg: #001E3C;
    --header-bg: #071A2F;
    --font-white: #fff;
    --blue-dark-border: #132F4C;
}

html,
body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: var(--body-bg);
    color: var(--font-white);
}

a {
    color: inherit;
    text-decoration: none;
}

body, input, textarea, select, button {
  font: 400 1rem 'Roboto', sans-serif;
}

button {
  cursor: pointer;
}

* {
    box-sizing: border-box;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%; // 15px
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%; // 14
  }
}
`
