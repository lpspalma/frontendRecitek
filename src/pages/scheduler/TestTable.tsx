import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ChangeEvent, useState } from 'react';
import statusMarker from './StatusMarker';

interface Column {
    id: 'orderID' | 'removalProcess' | 'companyName' | 'contact' | 'phone' | 'orderStatus';
    label: string;
    minWidth?: number;
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'orderID', label: 'ID pedido', minWidth: 100 },
    { id: 'removalProcess', label: 'Proc. Retirada (RET)', minWidth: 100 },
    { id: 'companyName', label: 'Nome', minWidth: 200 },
    { id: 'contact', label: 'Contato', minWidth: 170 },
    { id: 'phone', label: 'Fone', minWidth: 170 },
    { id: 'orderStatus', label: 'Status', minWidth: 170 },
];

interface Data {
    orderID: string;
    removalProcess: string;
    companyName: string;
    contact: string;
    phone: string;
    orderStatus: string;
}

function createData(
    orderID: string,
    removalProcess: string,
    companyName: string,
    contact: string,
    phone: string,
    orderStatus: string,
): Data {
    return { orderID, removalProcess, companyName, contact, phone, orderStatus };
}

const rows = [
    createData('orderID', 'removalProcess', 'name', 'contact', 'name', 'agendado'),

];

export default function TestTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={'center'}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.removalProcess}>

                                        <TableCell align='center'>{row.orderID}</TableCell>
                                        <TableCell align='center'>{row.removalProcess}</TableCell>
                                        <TableCell align='center'>{row.companyName}</TableCell>
                                        <TableCell align='center'>{row.contact}</TableCell>
                                        <TableCell align='center'>{row.phone}</TableCell>
                                        <TableCell align='center'>{statusMarker(row.orderStatus)}</TableCell>

                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}