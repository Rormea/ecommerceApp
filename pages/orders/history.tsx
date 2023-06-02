import { Chip, Grid, Typography, Link } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import NextLink from 'next/link'



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullName', headerName: 'Nombre Completo', width: 300 },

    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muetra la description si la orden está pagada o no',
        width: 200,

        renderCell: (params) => {
            return (
                params.row.paid
                    ? <Chip color="success" label='Pagada' variant="outlined" />
                    : <Chip color="error" label='No Pagada' variant="outlined" />
            )
        },
    },

    {
        field: 'orden',
        headerName: 'Ver orden',
        width: 200,
        sortable: false,

        renderCell: (params) => {
            return (
                <NextLink href={`/orders/${params.row.id}`} passHref legacyBehavior >
                    <Link underline="always" >
                        Detalle
                    </Link>
                </NextLink>
            )
        },
    }
];

// El type de rows va ser dinamico
const rows = [
    { id: 1, paid: true, fullName: 'Renzo Ormea' },
    { id: 2, paid: true, fullName: 'Renzo Schmidt' },
    { id: 3, paid: false, fullName: 'Bastian Ormea' },
    { id: 4, paid: true, fullName: 'Yérico Ormea' },
    { id: 5, paid: false, fullName: 'Jose Ormea' },
    { id: 6, paid: true, fullName: 'Madre Ormea' },
    { id: 7, paid: true, fullName: 'Jacque Cueva' },

]


const HistoryOrdersPage = () => {
    return (
        <ShopLayout title={"Historial de Ordenes"} pageDescription={"Historial de ordenes del Cliente"} >
            <Typography sx={{ my: 2 }} ><strong>Historial de Ordenes</strong></Typography>

            <Grid container >
                <Grid item xs={12} sx={{ h: 650, w: '100% ' }} >
                    <DataGrid
                        rows={rows}
                        columns={columns}
                    // pageSize={10}
                    // rowsPerPageOptions={[10]}

                    />
                </Grid>
            </Grid>





        </ShopLayout>
    )
}

export default HistoryOrdersPage