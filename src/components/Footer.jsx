import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Discountfooter from "../assets/Discount.png"
import { HiOutlineMail } from "react-icons/hi";
import Vector1 from "../assets/Vector (1).png"
import Vector2 from "../assets/Vector (2).png"
import Vector3 from "../assets/Vector (3).png"
import Vector from "../assets/Vector.png"
import payment from "../assets/credit-cards.png"
import PhoneIcon from "../assets/Border.png"
import GooglePlayImg from "../assets/play_store.png"
import AppStoreImg from "../assets/app_store.png"



function Footer() {
  return (
    <div>
      <footer className="">

        <div className="w-full bg-[#35AFA0] pt-10">
          <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

            <div className="text-center lg:text-left">
              <p className="text-gray-200">
                <span className="border-b-[1px]">$20 discount</span> for your first order
              </p>
              <h2 className="text-white text-[24px] sm:text-[28px] md:text-[31px] font-semibold mt-2">
                Join our newsletter and get...
              </h2>
              <p className="text-gray-300 text-[14px] py-4 max-w-[350px] mx-auto lg:mx-0">
                Join our email subscription now to get updates
                on promotions and coupons.
              </p>

              <div className="bg-white h-14 rounded-md p-1 flex items-center justify-between max-w-[400px] mx-auto lg:mx-0">
                <div className="pl-2 flex items-center gap-2 flex-1">
                  <HiOutlineMail className="text-gray-300 w-8 text-[20px]" />
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="bg-transparent text-sm focus:outline-none w-full"
                  />
                </div>
                <button className="bg-[#35AFA0] py-3 px-4 text-white rounded-md hover:bg-[#2e988c] duration-200">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="w-full max-w-[500px]">
              <img
                src={Discountfooter}
                alt="photo Discount"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>

          </div>
        </div>

        <div className="w-[90%] mx-auto py-6 border-b-[1px]">
          <div className="flex flex-wrap leading-8 lg:flex-nowrap items-center justify-center md:justify-around gap-4 md:gap-0">

            <div className="flex items-center gap-2">
              <img src={Vector} alt="fresh products" loading='lazy' />
              <span>Everyday fresh products</span>
            </div>

            <span className="hidden md:inline-block text-gray-300">|</span>

            <div className="flex items-center gap-2">
              <img src={Vector1} alt="Free delivery" loading='lazy' />
              <span>Free delivery for order over $70</span>
            </div>

            <span className="hidden md:inline-block text-gray-300">|</span>

            <div className="flex items-center gap-2">
              <img src={Vector2} alt="Daily Mega Discounts" loading='lazy' />
              <span>Daily Mega Discounts</span>
            </div>

            <span className="hidden md:inline-block text-gray-300">|</span>

            {/* Item 4 */}
            <div className="flex items-center gap-2">
              <img src={Vector3} alt="Best price" loading='lazy' />
              <span>Best price on the market</span>
            </div>

          </div>
        </div>


        <div className=" w-[90%] mx-auto text-gray-800 py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold mb-4 uppercase text-sm">Fruit & Vegetables</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <a className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Fresh Vegetables</a>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Herbs & Seasonings</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Fresh Fruits</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Cuts & Sprouts</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Exotic Fruits & Veggies</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Packaged Produce</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Party Trays</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase text-sm">Breakfast & Dairy</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Milk & Flavoured Milk</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Butter and Margarine</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Cheese</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Eggs Substitutes</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Honey</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Marmalades</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Sour Cream and Dips</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Yogurt</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase text-sm">Meat & Seafood</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Breakfast Sausage</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Dinner Sausage</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Beef</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Chicken</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Sliced Deli Meat</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Shrimp</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Wild Caught Fillets</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Crab and Shellfish</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Farm Raised Fillets</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase text-sm">Beverages</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Water</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Sparkling Water</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Soda & Pop</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Coffee</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Milk & Plant-Based Milk</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Tea & Kombucha</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Drink Boxes & Pouches</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Craft Beer</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Wine</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase text-sm">Breads & Bakery</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Milk & Flavoured Milk</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Butter and Margarine</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Cheese</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Eggs Substitutes</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Honey</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Marmalades</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Sour Cream and Dips</li>
              <li className=' cursor-pointer hover:text-blue-600 duration-200 w-fit'>Yogurt</li>
            </ul>
          </div>

        </div>


        <div className="bg-white">
          <div className="w-[90%]  border-t pt-8 mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

            <div className="flex items-center gap-4">
              <img src={PhoneIcon} alt="phone icon" className="w-10 h-10" />
              <div>
                <h4 className=" text-lg text-gray-800">8 800 555-55-55</h4>
                <p className="text-sm text-gray-400">Working 8:00 - 22:00</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end items-center gap-3">
              <div className="text-center md:text-right">
                <p className="text-sm font-semibold text-gray-800">
                  Download App on Mobile :
                </p>
                <p className="text-xs text-gray-400">15% discount on your first purchase</p>
              </div>

              <div className="flex gap-2">
                <img src={GooglePlayImg} alt="Google Play" className="h-10 cursor-pointer hover:-translate-y-1 duration-200" />
                <img src={AppStoreImg} alt="App Store" className="h-10 cursor-pointer hover:-translate-y-1 duration-200" />
              </div>

              <div className="flex gap-3 mt-2">
                <a href="#" className="text-[#35AFA0] border border-[#35AFA0] flex items-center justify-center h-8 w-8 rounded-full hover:text-white hover:bg-[#35AFA0] transition"><FaFacebookF /></a>
                <a href="#" className="text-[#35AFA0] border border-[#35AFA0] flex items-center justify-center h-8 w-8 rounded-full hover:text-white hover:bg-[#35AFA0] transition"><FaTwitter /></a>
                <a href="#" className="text-[#35AFA0] border border-[#35AFA0] flex items-center justify-center h-8 w-8 rounded-full hover:text-white hover:bg-[#35AFA0] transition"><FaInstagram /></a>
              </div>
            </div>
          </div>
          <div className="border-t my-6 w-[90%] mx-auto"></div>

          <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pb-8">

            <p className="text-xs text-gray-400 text-center md:text-left">
              Copyright 2025 © All rights reserved by Blackrise Theme
            </p>

            <div className='flex flex-wrap items-center justify-center gap-3'>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
                <a className='hover:text-blue-600' href="#">Privacy Policy</a>
                <a className='hover:text-blue-600' href="#">Terms and Conditions</a>
                <a className='hover:text-blue-600' href="#">Cookie</a>
              </div>

              <div className="flex gap-2">
                <img src={payment} alt="payment" className="h-5" />
              </div>
            </div>

          </div>
        </div>



      </footer>
    </div>
  )
}

export default Footer
