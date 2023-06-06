import { Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { ProductList } from '../../components/products'
import { useProducts } from '../../hooks'
import { ScreenLoading } from '../../components/ui'




const KidsPage = () => {

    const { products, isLoading } = useProducts('/products?gender=kid')

    return (
        <ShopLayout title={"category KidPage"} pageDescription={" la categoria de niños"} >

            <Typography variant='h1' component='h1' >Niñ@s</Typography>
            <Typography variant='h2' sx={{ mb: 3 }} >Todos los productos para niñ@s</Typography>

            {
                isLoading ? <ScreenLoading /> : <ProductList products={products} />
            }


        </ShopLayout>
    )
}

export default KidsPage