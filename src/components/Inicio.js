import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';

import foto from '../images/foto.png';
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
          <p className="paragraph">Professor e pesquisador na Faculdade de Agronomia Eliseu Maciel. Ministra aulas, cursos e palestras na área de pós-colheita, industrialização e qualidade de grãos. Realiza pesquisas voltadas para secagem, armazenamento e industrialização de arroz, cevada, feijão, milho, soja e trigo, além de estudar fatores relacionadas à etapa de produção que interferem na qualidade dos grãos. Na extensão, auxilia produtores e indústrias na melhoria da qualidade de produtos e processos. É Editor Associado do periódico Cereal Chemistry e coordenador de projeto de internacionalização da pós-graduação, financiado pela FAPERGS, com ênfase no desenvolvimento de ciência, tecnologia e inovação em pós-colheita, industrialização e qualidade de arroz.</p>
          <Button variant="contained" className="button">Entre em contato</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Inicio };