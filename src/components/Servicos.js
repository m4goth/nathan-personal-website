import * as React from 'react';
import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';

export function Servicos() {
  return (
        <Container maxWidth="sm">
            <h1 className='tittle'>Serviços</h1>
            <Grid container spacing={2}>
                {/* serviço 1 */}
                <Grid item xs={8} sm={6}>
                    {/* <h1>img</h1> */}
                    <svg width="" height="" viewBox="300 100 664 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="664" height="614" fill="#0E5B83"/>
                    </svg>

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
                    <svg width="" height="" viewBox="300 100 664 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="664" height="614" fill="#0E5B83"/>
                    </svg>
                </Grid>

                <br></br>
                {/* serviço 3 */}
                <Grid item xs={8} sm={6}>
                    {/* <h1>img</h1> */}
                    <svg width="" height="" viewBox="300 100 664 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="664" height="614" fill="#0E5B83"/>
                    </svg>
                </Grid>
                <Grid item xs={4} sm={6}>
                    <h2>Palestras</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus.</p>
                    <Button variant="outlined">Ver mais</Button>
                </Grid>
            </Grid>
        </Container>
  );
}


// export function Servicos(){
//     return <h2>Serviços</h2>
// }