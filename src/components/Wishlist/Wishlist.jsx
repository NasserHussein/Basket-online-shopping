import React, { useEffect } from 'react'
import wishlistBg from '../../assets/wishlist-bg.png';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../redux/slices/cartSlice';
import { getWishlist, removeItemFromWishlist } from '../../redux/slices/wishlistSlice';
import Loading from '../Loading/Loading';
import ProductDetails from '../ProductDetails/ProductDetails';
import { clearProduct, getSpecificProduct, setShowModal } from '../../redux/slices/specificProductSlice';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
export default function Wishlist() {
  let { items, loadingGetWishlist } = useSelector((store) => store.wishlistReducer);
  let { token } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();
  function handelAddToCart(e, id) {
    e.stopPropagation();
    if (token) {
      dispatch(addToCart(id));
    } else {
      toast.error('You must log in.');
    }
  };
  const handleProductClick = (id) => {
    dispatch(getSpecificProduct(id));
    dispatch(setShowModal(true));
    dispatch(clearProduct());
  };
  async function handelRemoveItemFromWishlist(e, id) {
    e.stopPropagation();
    if (token) {
      await dispatch(removeItemFromWishlist(id));
      dispatch(getWishlist());
    } else {
      toast.error('You must log in.');
    }
  };
  useEffect(()=>{
    dispatch(getWishlist());
  }, []);
  return <>
    <Helmet>
      <title>Wishlist</title>
    </Helmet>
    <div className="relative w-full h-[200px] overflow-hidden">
      <div className="absolute top-0 left-0 w-[200%] h-full animate-scroll-x flex">
        <img src={wishlistBg} alt="wishlist background" className="w-full object-cover" />
        <img src={wishlistBg} alt="wishlist background" className="w-full object-cover" />
      </div>
    </div>
    <h2 className="text-3xl font-bold text-[#3e445a] mb-6 text-center pt-6">Wishlist</h2>
    <div className="container">
      {loadingGetWishlist ? <Loading/>:
        <div className=" border my-5 rounded overflow-hidden grid xl:grid-cols-3 md:grid-cols-2">
          {items.map((item) =>
            <div key={item?._id} className="border-r  border-b relative p-5 cursor-pointer" onClick={() => { handleProductClick(item?._id) }}>
              <div className="flex justify-center items-center flex-col">
                <span className="bg-main px-3 py-1 text-white rounded-[4px] absolute top-3 left-3">${item?.price}.00</span>
                <span
                  onClick={(e) => handelRemoveItemFromWishlist(e,item?._id)}
                  className="bg-red-500 hover:scale-125 px-3 py-1 text-white rounded-[4px] absolute top-3 right-3 cursor-pointer">X</span>
                <img
                  src={item?.imageCover}
                  alt={item?.title}
                  loading="lazy"
                  className="lg:w-44"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-lg">{item?.title?.split(" ").slice(0,3).join(" ")}</h1>
                <p className="text-gray-300">{item?.description?.split(" ").slice(0,7).join(" ")}</p>
                {item?.quantity > 1 && <p className="text-[#00B853] font-semibold">{item?.quantity} IN STOCK</p>}
                {item?.quantity < 1 && <p className="text-red-400 font-semibold">OUT OF STOCK</p>}
              </div>
              <button
                onClick={(e) => { handelAddToCart(e, item?._id) }}
                type="button"
                className="text-black mt-4 w-full bg-[#FFCD00] hover:bg-yellow-500 focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                add to cart
              </button>
            </div>
          )}

        </div>
      }
    </div>
      <ProductDetails/>
  </>
}
