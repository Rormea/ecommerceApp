import { Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { ProductList } from '../../components/products'
import { useProducts } from '../../hooks'
import { ScreenLoading } from '../../components/ui'




const MenPage = () => {

    const { products, isLoading } = useProducts('/products?gender=men')

    return (
        <ShopLayout title={"category MenPage"} pageDescription={" la categoria de Hombres"} >

            <Typography variant='h1' component='h1' >Hombres</Typography>
            <Typography variant='h2' sx={{ mb: 3 }} >Todos los productos para Hombres</Typography>

            {
                isLoading ? <ScreenLoading /> : <ProductList products={products} />
            }


        </ShopLayout>
    )
}

export default MenPage