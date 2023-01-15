import { Box, Container, createTheme, ThemeProvider, Typography } from '@mui/material';
import ClientListTable from './Table';
import TestTable from './TestTable';

type Props = {};

const theme = createTheme();

const SchedulerPage = (props: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" sx={{ maxWidth: '100%' }} maxWidth={false}>
                <Box>
                    <Typography component="h1" variant="h5">
                        Lista de Clientes
                    </Typography>
                    <ClientListTable />
                    <TestTable />
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default SchedulerPage;

