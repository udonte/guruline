import React from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const links = [
  { name: "Home" },
  { name: "Pages" },
  { name: "Shop" },
  { name: "Element" },
  { name: "Blog" },
];

const Header = () => {
  const productData = useSelector((state) => state.guruline.productData);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] shadow-md border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <Logo color={"white"} />
        </Link>
        <div className="flex items-center justify-center gap-6">
          <ul className="flex items-end gap-8">
            {links.map((link, i) => {
              return (
                <li
                  key={i}
                  className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer"
                >
                  {link.name}
                </li>
              );
            })}
          </ul>
          <Link to={"/cart"}>
            <div className="relative">
              <LiaShoppingBagSolid size={40} color="rgb(124 45 18 )" />
              <span className="absolute w-6 top-4 left-2 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="userLogo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
