import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

type Props = {}
const theme = createTheme();
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        path: data.get('path'),
    });
};

const UploadPage = (props: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" sx={{ maxWidth: '100%' }} maxWidth={false}>

                <Box
                    sx={{
                        marginTop: 0,
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Adicionar nova Lista Base
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid xs={8}>

                            <TextField
                                sx={{
                                    width: { md: 1000 }
                                }}
                                required
                                id="path"
                                label="Diretório"
                                name="path"
                                fullWidth

                            />
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Adicionar
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
};

export default UploadPage;
