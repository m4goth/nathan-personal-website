import * as React from 'react';
import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid';


export function Servicos() {
  return (
        <Container maxWidth="sm">
            <h1 className='tittle'>Serviços</h1>
            <Grid container spacing={2}>
                {/* serviço 1 */}
                <Grid item xs={8}>
                    <h1>img</h1>
                </Grid>
                <Grid item xs={4}>
                    <h2>text</h2>
                    <button>Ver mais</button>
                </Grid>
                
                <br></br>
                {/* serviço 2 */}
                <Grid item xs={4}>
                    <h1>text</h1>
                    <button>Ver mais</button>
                </Grid>
                <Grid item xs={8}>
                    <h2>img</h2>
                </Grid>

                <br></br>
                {/* serviço 3 */}
                <Grid item xs={8}>
                    <h1>img</h1>
                </Grid>
                <Grid item xs={4}>
                    <h2>text</h2>
                    <button>Ver mais</button>
                </Grid>
            </Grid>
        </Container>
  );
}


// export function Servicos(){
//     return <h2>Serviços</h2>
// }