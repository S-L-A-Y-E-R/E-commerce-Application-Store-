"use client";

import { ShoppingCart } from "lucide-react";

import Button from "./ui/Button";
import Currency from "./ui/currency";
import useCart from "@/hooks/use-cart";

const Info = ({ data }) => {
  const cart = useCart();

  const onAddToCart = (e) => {
    e.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mt-3">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency values={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="text-black font-semibold">Size:</h3>
          <div>{data.sizeId.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="text-black font-semibold">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data.colorId.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add to cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
