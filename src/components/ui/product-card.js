'use client'

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import IconButton from "./icon-button";
import Currency from "./currency";

const ProductCard = ({ data }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/product/${data.id}`);
    }

    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    alt="image"
                    src={data?.images?.[0]?.url}
                    fill
                    className="rounded-md aspect-square object-cover"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={() => { }}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton
                            onClick={() => { }}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className="font-semibold tex-lg">{data.name}</p>
                <p className="text-sm text-gray-500">{data.category.name}</p>
            </div>
            <div className="flex items-center justify-between">
                <Currency values={data.price} />
            </div>
        </div>
    );
}

export default ProductCard;