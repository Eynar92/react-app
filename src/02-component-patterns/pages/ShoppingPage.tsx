import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: '/coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div style={{ width: '100%' }}>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1rem',
            }}>

                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title="Compount Components Mug" />
                    <ProductButtons />
                </ProductCard>

            </div>
        </div>
    )
}
