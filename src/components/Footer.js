import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import "../css/Footer.css";

// import { makeStyles } from '@mui/material/styles'

// const useStyles = makeStyles (
//   theme=>({
//     footer: {backgroundColor: theme.palette.common.blue, width:"100%"}
//   })
// );

export function Footer() {

  return (
    <footer className="footer-main">
      <Box px={{ xs: 3, sm: 10}} py={{ xs: 5, sm: 10}} color="#fff">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Categorias</Box>
              <Box>
                <Link href="/" color="inherit">
                  Sobre

                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Serviços
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Livros
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Blog
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Redes</Box>
              <Box>
                <Link href="https://www.instagram.com/nathan.vanier/" color="inherit">
                  Instagram
                </Link>
              </Box>
              <Box>
                <Link href="https://www.linkedin.com/in/nathanvanier/" color="inherit">
                  Linkedin
                </Link>
              </Box>
              <Box>
                <Link href="https://www.youtube.com/channel/UC5ud4bZQ0lwcEdMedw7s-QQ" color="inherit">
                  You Tube
                </Link>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Contato</Box>
              <Box>
                <Link href="/" color="inherit">
                  contatoemail@mail
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  (53)00000000000
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{ xs: 5, sm: 0}}></Box>
            &copy; Copy Right {new Date().getFullYear()}
        </Container>
      </Box>
    </footer>
  )};

export default Footer;