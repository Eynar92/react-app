import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        // console.log('onProductCountChange', count, product);

        setShoppingCart(oldShopingCart => {

            // if (count === 0) {

            //     const { [product.id]: toDelete, ...rest } = oldShopingCart;

            //     return rest
            // }

            // return {
            //     ...oldShopingCart,
            //     [product.id]: { ...product, count }
            // }

            // NUEVA IMPLEMENTACIÓN
            const productInCart: ProductInCart = oldShopingCart[product.id] || { ...product, count: 0 };

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShopingCart,
                    [product.id]: productInCart,
                }
            }

            // Si salta lo anterior significa que no hay producto, debemos borrarlo
            const { [product.id]: toDelete, ...rest } = oldShopingCart;
            return rest
        })
    }

    return {
        shoppingCart,

        onProductCountChange,
    }
}
