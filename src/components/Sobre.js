import * as React from "react";
import Container from "@mui/material/Container";

import '../css/Sobre.css'

const Sobre = () => {
  return (
    <Container className="container-sobre" maxWidth="md">
      <h1 className="tittle">Sobre</h1>
      <p className="paragraph"> Engenheiro Agrônomo graduado na Faculdade de Agronomia "Eliseu Maciel" (FAEM) da Universidade Federal de Pelotas (UFPel). Mestre e Doutor em Ciência e Tecnologia de Alimentos pelo Programa de Pós-Graduação em Ciência e Tecnologia de Alimentos (PPGCTA) do DCTA-FAEM-UFPel. É Professor Adjunto do Departamento de Ciência e Tecnologia Agroindustrial da FAEM-UFPel. É consultor Ad Hoc da Associação Brasileira das Indústrias de Arroz (ABIARROZ) e ministra cursos, palestras e treinamentos na área de pós-colheita, industrialização e qualidade de grãos. É instrutor habilitado pelo Ministério da Agricultura, Pecuária e Abastecimento para formação de classificadores oficiais de arroz, feijão e soja. Na pesquisa, atualmente coordena projeto de internacionalização da pós-graduação com foco no desenvolvimento de ciência, tecnologia e inovação no setor orizícola, com recursos da Fundação de Amparo à Pesquisa do Estado do Rio Grande do Sul (FAPERGS). É Editor Associado do periódico Cereal Chemistry.</p>
    </Container>
  );
};

export { Sobre };
