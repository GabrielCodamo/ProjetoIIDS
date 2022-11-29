import theme from '../../../src/theme'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
    Box,
    Container,
    Typography,
    Grid
} from '@mui/material'
import TextField from '@mui/material/TextField';
import TemplateDefault from '../../../src/templates/Login'

const Signup = () => {
    return(
        <TemplateDefault>
          <Container maxWidth="lg" component="main"
          sx={{
            marginTop: -6,
            padding: theme.spacing(6, 0, 6)
            
          }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
          <Box sx={{
                  padding: theme.spacing(3),
                  marginBottom: theme.spacing(3),
                  backgroundColor: theme.palette.background.white,
                  }}>
                 <Typography component="h5" variant="h4" align ='center' color="textprimary">
                    Login
                 </Typography>  
                 <Box
                    component="form"
                    sx={{
                        padding: theme.spacing(3),
                        marginBottom: theme.spacing(3),
                        backgroundColor: theme.palette.background.white,
                        '& > :not(style)': { m: 1, width: '60ch' },
                        marginTop: 5,
                        display: 'block',
                        position: 'relative',
                        textAlign: 'center',  
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" label="Username" type="username" variant="outlined" />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
            />      <Box>
                        <Stack spacing={2} direction="column">
                            <Button 
                            type='submit'
                            fullWidth
                            variant="contained" 
                            color='primary'
                            sx={{
                                margin: theme.spacing(3, 0, 2)
                            }}
                            >Login</Button>
                            <Button 
                            type='submit'
                            fullWidth
                            variant="contained" 
                            color='primary'
                            sx={{
                                margin: theme.spacing(3, 0, 2)
                            }}>
                            Sair</Button>
                        </Stack>
                    </Box>
                </Box>
           </Box>
            </Grid>
           </Grid>
          </Container>
         
        </TemplateDefault>
      )
    
    /*return(
        <TemplateDefault>
          <Box sx={{
            padding: theme.spacing(3),
            backgroundColor: theme.palette.background.white}}>
            <Container maxWidth="sm" component="main" >
            <Grid container spacing={3}>
            <Grid item xs={12}>
            <Typography component="h5" variant="h4" align ='center' color="textprimary">
                Login
            </Typography>       
                <Box
                    component="form"
                    sx={{
                        padding: theme.spacing(3),
                        marginBottom: theme.spacing(3),
                        backgroundColor: theme.palette.background.white,
                        '& > :not(style)': { m: 1, width: '60ch' },
                        marginTop: 5,
                        display: 'block',
                        position: 'relative',
                        textAlign: 'center',
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" label="Username" type="username" variant="outlined" />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
            />      
                <Box>
                    <Stack spacing={2} direction="row">
                        <Button size='large' variant="contained" >Login</Button>
                        <Button size='large' variant="contained" >Sair</Button>
                    </Stack>
                </Box>
                </Box>
            </Grid>
            </Grid>
            </Container>
       </Box>
        </TemplateDefault>
      
    )*/

}

export default Signup