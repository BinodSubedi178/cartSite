import { Link } from "react-router-dom";
import ProductImage from "../assets/product.png";
export const CartCard = () => {
  return (
    <div>
      <Link
        to="/cart"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100">
        <img
          className="object-cover w-45 rounded-t-lg h-40 md:h-auto md:w-24 md:rounded-none md:rounded-s-lg px-2"
          src={ProductImage}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 text-gray-700 font-bold">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </p>
          <p className="mb-3 text-gray-700 font-bold">$599</p>
        </div>
        <div>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2">
            Remove
          </button>
        </div>
      </Link>
    </div>
  );
};
