import { CartCard } from "../components";
import { useTitle } from "../hooks";

export const Cart = () => {
  useTitle("Cart");
  return (
    <div className="flex gap-5 flex-col items-center min-h-screen">
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
    </div>
  );
};
