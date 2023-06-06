import { Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { ProductList } from '../../components/products'
import { useProducts } from '../../hooks'
import { ScreenLoading } from '../../components/ui'




const WomenPage = () => {

    const { products, isLoading } = useProducts('/products?gender=women')

    return (
        <ShopLayout title={"category WomenPage"} pageDescription={" la categoria de Mujeres"} >

            <Typography variant='h1' component='h1' >Mujeres</Typography>
            <Typography variant='h2' sx={{ mb: 3 }} >Todos los productos para Mujeres</Typography>

            {
                isLoading ? <ScreenLoading /> : <ProductList products={products} />
            }


        </ShopLayout>
    )
}

export default WomenPage