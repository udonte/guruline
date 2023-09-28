import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/gurulineSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

// import { ToastContainer, toast } from 'react-toastify';
// import { decrementQuantity, incrementQuantity } from '../redux/gurulineSlice';

const CartItem = () => {
  const productData = useSelector((state) => state.guruline.productData);
  const dispatch = useDispatch();

  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">shopping cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item._id)) &&
                  toast.error(`${item.title} is removed`)
                }
                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
              <img
                className="w-32 h-32 object-cover"
                src={item.image}
                alt="productImg"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">${item.price}</p>
            <div className="w-52 flex items-center justify-center text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  className="border h-5 font-normal text-lg flex items-center justify-center p-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  onClick={() =>
                    dispatch(
                      decrementQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="border h-5 font-normal text-lg flex items-center justify-center p-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  onClick={() =>
                    dispatch(
                      incrementQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
            <p className="w-14">
              ${(parseFloat(item.price) * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      <button
        className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
        onClick={() =>
          dispatch(resetCart()) && toast.error("Your Cart is Empty!")
        }
      >
        Reset Cart
      </button>
      <div>
        <p className="mt-8 ml-7">
          Your Cart is Empty. Please go back to shopping and add products to
          Cart.
        </p>
        <Link to="/">
          <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
            <HiOutlineArrowLeft />
            <span>go shopping</span>
          </button>
        </Link>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CartItem;
