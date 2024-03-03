import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data";
import { useShoppingCart } from "../hooks";

import "../styles/custom-styles.css";

export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();

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

                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            value={shoppingCart[product.id]?.count || 0}
                            onChange={onProductCountChange}
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '0 10px 10px rgba(120,120,120,0.2)' }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }

            </div>

            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            value={product.count}
                            onChange={onProductCountChange}
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '0 10px 10px rgba(120,120,120,0.2)' }} />
                            <ProductButtons
                                className="custom-buttons"
                                style={{ display: 'flex', justifyContent: 'center' }}
                            />
                        </ProductCard>
                    ))
                }

            </div>

        </div>
    )
}
