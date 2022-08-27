import * as React from "react";
import Container from "@mui/material/Container";

import '../css/Blog.css'

const Blog = () => {
  return (
    <Container className="container-blog">
      <h1 className="tittle">Conteúdo</h1>
      <p className="paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet adipiscing bibendum velit bibendumLorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet adipiscing bibendum velit bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet adipiscing bibendum velit bibendumLorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet adipiscing bibendum velit bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet adipiscing bibendum velit bibendumLorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet adipiscing bibendum velit bibendum.</p>
    </Container>
  );
};

export { Blog };


// import * as React from 'react';
// import Container from '@mui/material/Container';

// import "../css/Blog.css";

// const Blog = () => { 
//   return (
//       <Container className="container">
//         <h1>hello</h1>
//       </Container>
//   );
// }

// export { Blog };

// export function Blog() {
//     return <h2>Blog</h2>
// }