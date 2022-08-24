import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import foto from "../images/foto.png";

const Inicio = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Container>
      <Grid container spacing={2} sx={{p:4}}>
        <Grid item xs={12} sm={6} >
          <img style={{ width: "100%", borderRadius: '50%'}} src={foto} alt="foto"></img>
        </Grid>
        <Grid item xs={12} sm={6}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac tortor dignissim. Amet cursus sit amet dictum sit. Molestie ac feugiat sed lectus. Ante metus dictum at tempor commodo ullamcorper. A scelerisque purus semper eget. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Vel turpis nunc eget lorem. Consectetur adipiscing elit ut aliquam purus. Sit amet nisl purus in. Accumsan tortor posuere ac ut consequat semper. Enim neque volutpat ac tincidunt vitae semper quis. Egestas integer eget aliquet nibh praesent tristique magna sit. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Consectetur adipiscing elit ut aliquam purus. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Sodales neque sodales ut etiam sit amet nisl purus.
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Inicio };

// export function Inicio(){
//     return <h2>Inicio</h2>
// }
