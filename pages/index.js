import TemplateDefault from '../src/templates/Default'
import { 
Container, 
Grid,
Box,  
Card,
CardMedia,
Button,
CardActions,
Typography,
CardContent
} from '@mui/material'
import theme from '../src/theme'
import Carousel from 'react-material-ui-carousel'

export default function Home(){
  return(
    <TemplateDefault>
      
      <Container maxWidth="lg"
      sx={{
        marginTop: -5,
        padding: theme.spacing(8, 0, 6)
      }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box sx={{
              padding: theme.spacing(3),
              marginBottom: theme.spacing(3),
              backgroundColor: theme.palette.background.white,
              }}>
              <Carousel
                autoPlay={false}
                animation='slide'
                navButtonsProps={
                  {
                    style:{
                      color:'white'
                    }
                  }
                }
                >
                <Card sx={{
                  height: '100%'
                }}>
                 <CardMedia
                 component='img'
                 sx={{  
                  }}
                  image="Image2.jpg"
                  alt="Imagens de Apresentacao"
                  />
                </Card>
                <Card sx={{
                  height: '100%'
                }}>
                 <CardMedia
                 component='img'
                 sx={{ 
                  }}
                  image="Imagem1.jpg"
                  alt="Imagens de Apresentacao"
                  />
                </Card>
                <Card sx={{
                  height: '100%'
                }}>
                 <CardMedia
                 component='img'
                 sx={{
                  }}
                  image="Imagem3.jpg"
                  alt="Imagens de Apresentacao"
                  />
                  
                </Card>
            </Carousel>
            </Box>
            <Box sx={{
              padding: theme.spacing(3),
              marginBottom: theme.spacing(3),
              backgroundColor: theme.palette.background.white,
            }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Sobre a organização
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    O Instituto Ilha do Semeador, ou simplesmente denominado “Ilha do
                    Semeador”, é uma organização da sociedade civil, sem fins lucrativos, fundada em
                    23/11/2011, no município de Presidente Figueiredo – Amazonas, pelo pastor Clécio
                    Adilson dos Santos Bruno, sob a denominação “Projeto Amigos de Deus”, que durante
                    anos ajudou de maneira individual a reabilitar dependentes de drogas, álcool ou
                    qualquer outra substância química, oferecendo tratamento de forma gratuita a mais de
                    (100) cem pessoas do sexo masculino, com idade etária entre 18 a 59 anos, advindos
                    de todos os municípios do Estado do Amazonas.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Frente ao exposto, a trajetória do pastor e missionário José Hamilton Ribeiro
                    Pinheiro, se intensifica e ganha força com o falecimento de seu irmão, na luta pelo
                    combate as drogas e outras mazelas sociais. Recebendo o convite para assumir
                    oficialmente a presidência da instituição no ano de 2021, mudando sua denominação
                    para “Instituto Ilha do Semeador”.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Saiba Mais Sobre</Button>
                  </CardActions>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}
