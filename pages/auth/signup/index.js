import theme from '../../../src/theme'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
    Box,
    Container,
    Typography,
} from '@mui/material'
import { 
    FormControl,
    InputLabel,
    Input,
    FormHelperText
} from '@mui/material';
import TemplateDefault from '../../../src/templates/Register'

const Signup = () => {

    return(
        <TemplateDefault>
          <Box sx={{
            padding: theme.spacing(3),
            backgroundColor: theme.palette.background.white}}>
            <Container maxWidth="sm" component="main" >
            <Typography component="h5" variant="h4" align ='center' color="textprimary">
                Register
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
                        <FormControl>
                            <InputLabel htmlFor="my-input">Email</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">Digite seu Email</FormHelperText>
                        </FormControl>
                        <FormControl>
                          <InputLabel htmlFor="my-input">Nome</InputLabel>
                          <Input id="my-input" aria-describedby="my-helper-text" />
                          <FormHelperText id="my-helper-text">Digite seu Nome</FormHelperText>
                        </FormControl>
                        <FormControl>
                          <InputLabel htmlFor="my-input">CPF</InputLabel>
                          <Input id="my-input" aria-describedby="my-helper-text" />
                          <FormHelperText id="my-helper-text">Digite seu CPF</FormHelperText>
                        </FormControl>
                        <FormControl>   
                            <InputLabel htmlFor="my-input">Username</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">Digite seu Username</FormHelperText>
                        </FormControl>
                        <FormControl>   
                            <InputLabel htmlFor="my-input">Password</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">Digite seu Password</FormHelperText>
                        </FormControl>

                <Box>
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" >Registrar</Button>
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