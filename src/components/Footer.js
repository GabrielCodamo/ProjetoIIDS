import { Container, Box, Grid, Typography, SvgIcon} from "@mui/material"
import Image from "next/image";
import theme from "../theme"
import styles from "../../styles/Footer.module.css"

const Footer = () => {
    return( 
      <Container maxWidth="lg" component="footer" sx={{
        borderTop: '1px solid #000000'
        ,marginTop: theme.spacing(1)
        , paddingTop: theme.spacing(3)
        , paddingBottom: theme.spacing(3)
        , textAlign: "center" 
        ,[theme.breakpoints.up('sm')]:{
          paddingTop: theme.spacing(5),
          paddingBottom: theme.spacing(5),
        }           
    }}>  
            <Grid  className={styles.pattern}>
              <Grid item xs={6} sm={3}>
                <Box textAlign={"center"}>
                  <Typography  variant="subtitle1">
                  RUA SÂO PEDRO, Nº08
                  COMUNIDADE RUMO CERTO,
                  CEP 69.735-000
                  PRESIDENTE FIGUEIREDO - AM
                  </Typography>
                </Box> 
              </Grid> 
              <Grid item xs={6} sm={3}>
                <Box textAlign={"center"}>
                <Typography  variant="subtitle1">
                  TELEFONE
                  (92) 98236-9616,
                  (92) 99134-7510
                  </Typography>
                </Box>  
             </Grid>
            </Grid>
        </Container>
    )
}

export default Footer