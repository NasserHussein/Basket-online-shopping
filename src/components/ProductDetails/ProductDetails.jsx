import React, { useEffect, useState } from 'react'
import { FaRegHeart, FaShareAlt, FaStar, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificProduct, setShowModal } from '../../redux/slices/specificProductSlice';
import Loading from '../Loading/Loading';

export default function ProductDetails() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("small");
  const { isLoadin, product, showModal } = useSelector((Store) => Store.specificProductReducer)
  const handleWishlist = () => {
    dispatch(addToWishlist(product._id));
  };

  const [selectedImage, setSelectedImage] = useState(product.imageCover);
  useEffect(() => {
    if (product?.imageCover) {
      setSelectedImage(product?.imageCover);
    }
  }, [product?.imageCover]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showModal]);

  return <>
    {isLoadin ? <Loading /> : showModal ?
      <div className=" fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={() => { dispatch(setShowModal(false)); setSelectedImage(null); }}>
        <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-white rounded-lg p-3 md:p-6" onClick={(e) => e.stopPropagation()}>
          <button
            className="absolute top-4 right-4 text-xl text-gray-600 hover:text-black"
            onClick={() => { dispatch(setShowModal(false)); setSelectedImage(null); }}
          >
            <FaTimes />
          </button>

          <div className=" pt-10 md:pt-7 w-full flex flex-col md:flex-row gap-6">
            <div className="flex flex-row md:flex-col order-2 md:order-1 ">
              <div className="flex w-full flex-row md:flex-col items-center justify-center gap-2 overflow-x-auto md:overflow-x-visible py-2 md:pb-0">
                {product.images?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="thumb"
                    onClick={() => setSelectedImage(img)}
                    className={` size-16 p-2 object-cover border rounded-md cursor-pointer flex-shrink-0 ${selectedImage === img ? "ring-2 ring-green-600" : ""
                      }`}
                  />
                ))}
              </div>
            </div>

            <div className=" w-full md:w-[50%] order-1 md:order-2 flex items-center justify-center rounded-lg border ">
              <img
                src={selectedImage}
                alt="product"
                className="w-full max-w-xs md:max-w-sm h-auto max-h-80 rounded-xl"
              />
            </div>

            <div className="order-3 space-y-4 md:w-[40%]">
              <h2 className="text-2xl font-semibold">{product.title}</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <p className="text-gray-600">Brand: {product.brand?.name}</p>
                <p className="text-gray-600">Category: {product.category?.name}</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-yellow-400 flex items-center">
                  <FaStar className="mr-1" /> {product.ratingsAverage}
                </span>
                <span className="text-sm text-gray-500">
                  ({product.ratingsQuantity} reviews)
                </span>
              </div>

              <div className="text-lg font-bold text-green-600">
                {product.priceAfterDiscount ? (
                  <>
                    <span className="line-through text-gray-500 mr-2">
                      {product.price} EGP
                    </span>
                    <span>{product.priceAfterDiscount} EGP</span>
                  </>
                ) : (
                  <span>{product.price} EGP</span>
                )}
              </div>

              <div className="space-y-2">
                <p className="font-medium">Available In:</p>
                <div className="flex flex-wrap gap-4">
                  {["small", "medium", "large"].map((s) => (
                    <label key={s} className="capitalize cursor-pointer flex items-center">
                      <input
                        type="radio"
                        value={s}
                        checked={size === s}
                        onChange={() => setSize(s)}
                        className="mr-2"
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <div className=" flex-1 flex items-center gap-2">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className=" flex-1 px-3 py-1 border rounded"
                  >
                    −
                  </button>
                  <span className=" flex-1 min-w-[20px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className=" flex-1 px-3 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
                <button className=" flex-1 px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                  Add to Cart
                </button>
              </div>

              <div className="flex w-full gap-4 flex-wrap">
                <button
                  onClick={handleWishlist}
                  className=" flex-1 flex items-center justify-center gap-3 px-4 py-2 border rounded hover:bg-gray-100 transition"
                >
                  <FaRegHeart className="text-red-500" /> Wishlist
                </button>
                <button className=" flex-1 flex items-center justify-center gap-3 px-4 py-2 border rounded hover:bg-gray-100 transition">
                  <FaShareAlt /> Share
                </button>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">Product Details:</h4>
                <p className="text-sm text-gray-600 whitespace-pre-line">
                  {product.description?.split(" ").slice(0, 10).join(" ") + '...'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> : null
    }
  </>
}
