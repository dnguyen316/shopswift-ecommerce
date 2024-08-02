"use client";

import { CategoriesIconList } from "@/app/components/icons";
import crypto from "crypto";
import Link from "next/link";

import "./categories-list.styles.css";

const categoriesList = [
  {
    id: crypto.randomBytes(64).toString("hex"),
    icon: "phone",
    name: "Phones",
    url: "categories/phones",
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    icon: "computer",
    name: "Computers",
    url: "categories/computers",
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    icon: "camera",
    name: "Camera",
    url: "categories/camera",
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    icon: "smartwatch",
    name: "SmartWatch",
    url: "categories/smartwatch",
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    icon: "headphone",
    name: "Headphones",
    url: "categories/headphones",
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    icon: "gamepad",
    name: "Gaming",
    url: "categories/gaming",
  },
];

const CategoriesList = () => {
  return (
    <ul className="mt-[60px] flex items-center gap-[30px]">
      {categoriesList.map((item) => (
        <li key={item.id} className="">
          <Link
            href={item.url}
            className="flex h-[145px] w-[170px] flex-col items-center justify-center gap-[16px] rounded-[4px] border-2 border-button/30 font-medium text-text-2 hover:border-secondary-2 hover:bg-secondary-2 hover:text-white"
          >
            {CategoriesIconList[item.icon as keyof typeof CategoriesIconList]}
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
