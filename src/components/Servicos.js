import * as React from 'react';
import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import { Box } from '@mui/system';

export function Servicos() {
  return (
        <Container className="container-servicos">
            <h1 className='tittle'>Serviços</h1>
            <Grid container spacing={3}>
                {/* serviço 1 */}
                <Grid item xs={8} sm={6}>
                    {/* <h1>img</h1> */}
                    <Box sx={{backgroundColor: "primary.main", width: "50%", height:"450px", margin: "0 auto"}} />
                </Grid>
                <Grid item xs={4} sm={6} className="grid">
                    <h2>Cursos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus.</p>
                    <Button variant="outlined">Ver mais</Button>
                </Grid>
                
                <br></br>
                {/* serviço 2 */}
                <Grid item xs={4} sm={6}>
                    <h2>Consultoria</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus.</p>
                    <Button variant="outlined">Ver mais</Button>
                </Grid>
                <Grid item xs={8} sm={6}>
                    {/* <h1>img</h1> */}
                    <Box sx={{backgroundColor: "primary.main", width: "50%", height:"450px", margin: "0 auto"}} />
                   </Grid>

                <br></br>
                {/* serviço 3 */}
                <Grid item xs={8} sm={6}>
                    {/* <h1>img</h1> */}
                    <Box sx={{backgroundColor: "primary.main", width: "50%", height:"450px", margin: "0 auto"}} />
                  </Grid>
                <Grid item xs={4} sm={6}>
                    <h2>Palestras</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus.</p>
                    <Button variant="outlined">Ver mais</Button>
                </Grid>
                &emsp; 
                &emsp;
            </Grid>
        </Container>
  );
}

// <Container maxWidth="sm"></Container>

// export function Servicos(){
//     return <h2>Serviços</h2>
// }