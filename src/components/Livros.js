import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import '../css/Livros.css';

const Livros = () => {
    return (
      <Container className="container-livros" maxWidth="md">
        <Grid container spacing={2} sx={{p:4}}>
          <Grid xs={12} sm={6} className="grid-left" item>
            <h1>Livros</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus. Hac egestas facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis et. Pellentesque amet tristique rhoncu, donec a euismod velit. Hendrerit molestie fermentum odi euismod.</p>
          </Grid>

          <Grid xs={12} sm={6} className="grid-right" item>
            <Grid container spacing={2} sx={{p:4}}>
                <Grid xs={8} sm={6} item>
                    <svg viewBox="300 100 664 614" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="664" height="614" fill="#C2C2C2"/>
                    </svg>               
                </Grid>
                <Grid xs={8} sm={6} item>
                    <svg viewBox="300 100 664 614" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="664" height="614" fill="#C2C2C2"/>
                    </svg>    
                </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  };
  
  export { Livros };

// export function Livros() {
//     return <h2>Livros</h2>
// }