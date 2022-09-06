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
            <h3>Me siga nas redes sociais</h3>
            <h3>@Nathan</h3>
            <h3>contatoemail@mail.com</h3>
        </div>
        <br></br>
        <div>
           <ul className="social-list">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
           </ul>
        </div>
        <br></br>
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