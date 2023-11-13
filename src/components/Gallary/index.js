"use client";
import Image from "next/image";
import { Tab } from "@headlessui/react";

import GallaryTab from "./gallary-tab";

const Gallary = ({ images }) => {
  return (
    <Tab.Group as={"div"} className={"flex flex-col-reverse"}>
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className={"grid grid-cols-4 gap-6"}>
          {images.map((image, i) => (
            <GallaryTab key={i} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className={"w-full aspect-square"}>
        {images.map((image, i) => (
          <Tab.Panel key={i}>
            <div className="relative aspect-square h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                src={image}
                alt="image"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallary;
