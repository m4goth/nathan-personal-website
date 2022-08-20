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
        <div className="icon-redes">
            <svg width="190px" height="30px" top="4657px" left="3082px" viewBox="0 0 190 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.3 19.2723H23.31V21.596C21.4725 23.1429 19.0875 23.9933 16.5675 23.9933C11.0775 23.9933 6.6375 19.9621 6.6375 14.9933C6.6375 10.0312 11.0775 5.9933 16.5675 5.9933C19.215 5.9933 21.7125 6.9308 23.5875 8.6317L28.26 4.39286C25.125 1.56027 20.9775 0 16.5525 0C7.35 0 0 6.73661 0 15C0 23.2031 7.275 30 16.5525 30C21.2925 30 25.89 28.2455 29.3775 24.4754C29.2275 22.6272 28.3725 19.2723 24.3 19.2723ZM23.3925 11.7388H15.42V17.6987H24.3C26.8125 17.6987 28.8375 18.7098 30 20.4978V18.4487C30 14.0826 26.97 11.7388 23.3925 11.7388Z" fill="black" fill-opacity="0.6"/>
        <path d="M71.5122 19.0625L72.2065 14.5381H67.8652V11.6021C67.8652 10.3643 68.4717 9.15771 70.416 9.15771H72.3896V5.30566C72.3896 5.30566 70.5986 5 68.8862 5C65.311 5 62.9741 7.16699 62.9741 11.0898V14.5381H59V19.0625H62.9741V30H67.8652V19.0625H71.5122Z" fill="black" fill-opacity="0.6"/>
        <path d="M116.003 7.30838C111.747 7.30838 108.313 10.7425 108.313 15C108.313 19.2575 111.747 22.6916 116.003 22.6916C120.26 22.6916 123.693 19.2575 123.693 15C123.693 10.7425 120.26 7.30838 116.003 7.30838ZM116.003 20.0006C113.253 20.0006 111.004 17.758 111.004 15C111.004 12.242 113.246 9.99944 116.003 9.99944C118.761 9.99944 121.003 12.242 121.003 15C121.003 17.758 118.754 20.0006 116.003 20.0006ZM125.801 6.99375C125.801 7.99119 124.998 8.7878 124.008 8.7878C123.011 8.7878 122.214 7.98449 122.214 6.99375C122.214 6.00301 123.017 5.19971 124.008 5.19971C124.998 5.19971 125.801 6.00301 125.801 6.99375ZM130.895 8.81457C130.781 6.41136 130.232 4.28261 128.472 2.52873C126.718 0.774852 124.59 0.225929 122.187 0.105433C119.711 -0.0351445 112.289 -0.0351445 109.813 0.105433C107.417 0.219235 105.288 0.768158 103.528 2.52203C101.768 4.27591 101.226 6.40466 101.105 8.80788C100.965 11.2847 100.965 18.7086 101.105 21.1854C101.219 23.5886 101.768 25.7174 103.528 27.4713C105.288 29.2251 107.41 29.7741 109.813 29.8946C112.289 30.0351 119.711 30.0351 122.187 29.8946C124.59 29.7808 126.718 29.2318 128.472 27.4713C130.225 25.7174 130.774 23.5886 130.895 21.1854C131.035 18.7086 131.035 11.2914 130.895 8.81457ZM127.695 23.843C127.173 25.1551 126.163 26.1659 124.844 26.6947C122.87 27.478 118.185 27.2972 116.003 27.2972C113.822 27.2972 109.13 27.4713 107.162 26.6947C105.851 26.1726 104.84 25.1618 104.311 23.843C103.528 21.8682 103.709 17.1823 103.709 15C103.709 12.8177 103.535 8.12507 104.311 6.15698C104.833 4.84492 105.844 3.8341 107.162 3.30525C109.137 2.52203 113.822 2.70278 116.003 2.70278C118.185 2.70278 122.877 2.52873 124.844 3.30525C126.156 3.8274 127.167 4.83822 127.695 6.15698C128.479 8.13176 128.298 12.8177 128.298 15C128.298 17.1823 128.479 21.8749 127.695 23.843Z" fill="black" fill-opacity="0.6"/>
        <path d="M186.916 7.47654C186.935 7.80464 186.935 8.13283 186.935 8.46093C186.935 18.4687 180.749 30 169.442 30C165.958 30 162.722 28.7578 160 26.6016C160.495 26.6719 160.971 26.6953 161.485 26.6953C164.359 26.6953 167.005 25.5 169.118 23.461C166.415 23.3906 164.15 21.211 163.369 18.2109C163.75 18.2812 164.131 18.3281 164.53 18.3281C165.083 18.3281 165.635 18.2343 166.149 18.0703C163.331 17.3671 161.218 14.3203 161.218 10.6406V10.5469C162.037 11.1094 162.989 11.461 163.997 11.5078C162.341 10.1484 161.256 7.82809 161.256 5.20307C161.256 3.79685 161.561 2.50779 162.094 1.38278C165.121 5.97652 169.67 8.97647 174.772 9.30466C174.676 8.74215 174.619 8.15627 174.619 7.57032C174.619 3.3984 177.36 0 180.768 0C182.538 0 184.137 0.91406 185.26 2.39062C186.65 2.06252 187.982 1.42967 189.162 0.562504C188.706 2.32036 187.735 3.79692 186.459 4.73435C187.697 4.57037 188.896 4.1484 190 3.56253C189.163 5.06246 188.116 6.39835 186.916 7.47654Z" fill="black" fill-opacity="0.6"/>
            </svg>
        </div>
        <br></br>
        <div className="direitos">
          <p className="col-sm">
            &copy;
            {new Date().getFullYear()} 
            <br></br>
            Termos de Serviço
          </p>
        </div>
        <br></br>

      </div>
    </div>
  );
}

export default Footer;