import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import React from "react";
import "../css/Footer.css";
// import { makeStyles } from '@mui/material/styles'

// const useStyles = makeStyles (
//   theme=>({
//     footer: {backgroundColor: theme.palette.common.blue, width:"100%"}
//   })
// );

export function Footer() {
  // const classes = useStyles();

  return (
    <div className="footer-main">
      <div className="footer-conteudo">
        <div className="texto">
            <h5>Me siga nas redes sociais</h5>
            <h5>@Nathan</h5>
            <h5>contatoemail@mail.com</h5>
          
            <ul className="social-list">
            <li>
              <FaFacebook />
            </li>
            &emsp;
            <li>
              <FaInstagram /> 
            </li>
            &emsp;
            <li>
              <FaTwitter />
            </li>
            &emsp;
           </ul>
        </div>
        
        {/* <div className="direitos">
          <p className="col-sm">
            &copy;
            {new Date().getFullYear()} 
            <br></br>
            Termos de Serviço
          </p>
        </div> */}
        {/* <br></br> */}

      </div>
    </div>
  );
}

export default Footer;