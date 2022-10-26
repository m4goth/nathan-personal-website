import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';

import foto from '../../public/assets/foto.png';
import '../css/Inicio.css';

const Inicio = () => {
  return (
    <Container className="container-inicio">
      <Grid container spacing={2} sx={{p:4}}>
        <Grid item xs={12} sm={6} className="grid-left">
          <img style={{ width: "100%", borderRadius: '50%'}} src={foto} alt="foto"/>
        </Grid>
        <Grid item xs={12} sm={6} className="grid-right">
        &emsp;
        &emsp;
          <h1 className="tittle">Nathan Levien Vanier</h1>
          <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis et. Pellentesque amet tristique rhoncu, donec a euismod velit. Hendrerit molestie fermentum odi euismod.</p>
          <Button variant="contained" className="button">Entre em contato</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Inicio };