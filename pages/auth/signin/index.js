import theme from '../../../src/theme'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
    Box,
    Container,
    Typography,
} from '@mui/material'
import TextField from '@mui/material/TextField';
import TemplateDefault from '../../../src/templates/Login'

const Signup = () => {

    return(
        <TemplateDefault>
          <Box sx={{
            padding: theme.spacing(3),
            backgroundColor: theme.palette.background.white}}>
            <Container maxWidth="sm" component="main" >
            <Typography component="h5" variant="h4" align ='center' color="textprimary">
                Login
            </Typography>       
            </Container>
            <Container maxWidth="md">
                <Box
                    component="form"
                    sx={{
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
                        <Button variant="contained" >Login</Button>
                        <Button variant="contained" >Sair</Button>
                    </Stack>
                </Box>
                </Box>
            </Container>
       </Box>
        </TemplateDefault>
      
    )

}

export default Signup