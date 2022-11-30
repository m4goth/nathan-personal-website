// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';
import Box from '@mui/material/Link';
// import "../css/Footer.css";


// import { makeStyles } from '@mui/material/styles'

// const useStyles = makeStyles (
//   theme=>({
//     footer: {backgroundColor: theme.palette.common.blue, width:"100%"}
//   })
// );

export function Footer() {

  return (
    <footer>
      <Box px={{ xs: 3, sm: 10}} py={{ xs: 5, sm: 10}} bgcolor="text.secondary" color="white">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Categorias</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contato
                </Link>
              </Box>
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
                <Link href="/" color="inherit">
                  Instagram
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Linkedin
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
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
            Material Ui Workshop $reg; {new Date().getFullYear()}
        </Container>
      </Box>
    </footer>
  )};

export default Footer;





  // return (
  //   <div className="footer-main">
  //     <div className="footer-conteudo">
  //       <div className="texto">
  //           <p>contatoemail@mail.com</p>
          
  //           <ul className="social-list">
  //           <li>
  //             <FaFacebook />
  //           </li>
  //           &emsp;
  //           <li>
  //             <FaInstagram /> 
  //           </li>
  //           &emsp;
  //           <li>
  //             <FaLinkedin />
  //           </li>
  //          </ul>
  //       </div>
       
  //       {/* <div className="direitos">
  //         <p className="col-sm">
  //           &copy;
  //           {new Date().getFullYear()} 
  //           <br></br>
  //           Termos de Serviço
  //         </p>
  //       </div> */}
  //       {/* <br></br> */}

  //     </div>
  //   </div>
  // );
