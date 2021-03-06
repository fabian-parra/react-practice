import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0px;
  padding: 0px;
  border: 0px;
}

body {
  font: 1em/1.25 Arial, Helvetica, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0px;
  padding: 0px;
  font-weight: normal;
  font-family: Arial, Helvetica, sans-serif;
}

p, th, td, li, dd, dt, ul, ol, blockquote, q, acronym, abbr, a, input, select, textarea {
  margin: 0;
  padding: 0;
  font: normal normal normal 1em/1.25 Arial, Helvetica, sans-serif;
}

blockquote {
  margin: 1.25em;
  padding: 1.25em
}

q {
  font-style: italic;
}

acronym, abbr {
  cursor: help;
  border-bottom: 1px dashed;
}

small {
  font-size:.85em;
}

big {
  font-size:1.2em;
}

img {
  border: none;
}

table {
  margin: 0;
  padding: 0;
  border: none;
}

form {
  margin: 0;
  padding: 0;
  display: inline;
}

label {
  cursor: pointer;
}

html,body,#root {
  width: 100%;
  height: 100%;
}
`

export default GlobalStyle
