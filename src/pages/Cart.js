import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useSelector } from "react-redux";

export const Cart = () => {
  const products = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);
  useTitle("Cart");
  
 

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: ${total}</h1>
        { products.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
