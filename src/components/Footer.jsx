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

  const features = [
    { icon: Vector, text: "Everyday fresh products", alt: "fresh products" },
    { icon: Vector1, text: "Free delivery for order over $70", alt: "Free delivery" },
    { icon: Vector2, text: "Daily Mega Discounts", alt: "Daily Mega Discounts" },
    { icon: Vector3, text: "Best price on the market", alt: "Best price" },
  ];

  const Links = [
    {
      title: "Fruit & Vegetables",
      items: [
        "Fresh Vegetables",
        "Herbs & Seasonings",
        "Fresh Fruits",
        "Cuts & Sprouts",
        "Exotic Fruits & Veggies",
        "Packaged Produce",
        "Party Trays",
      ],
    },
    {
      title: "Breakfast & Dairy",
      items: [
        "Milk & Flavoured Milk",
        "Butter and Margarine",
        "Cheese",
        "Eggs Substitutes",
        "Honey",
        "Marmalades",
        "Sour Cream and Dips",
        "Yogurt",
      ],
    },
    {
      title: "Meat & Seafood",
      items: [
        "Breakfast Sausage",
        "Dinner Sausage",
        "Beef",
        "Chicken",
        "Sliced Deli Meat",
        "Shrimp",
        "Wild Caught Fillets",
        "Crab and Shellfish",
        "Farm Raised Fillets",
      ],
    },
    {
      title: "Beverages",
      items: [
        "Water",
        "Sparkling Water",
        "Soda & Pop",
        "Coffee",
        "Milk & Plant-Based Milk",
        "Tea & Kombucha",
        "Drink Boxes & Pouches",
        "Craft Beer",
        "Wine",
      ],
    },
    {
      title: "Breads & Bakery",
      items: [
        "Milk & Flavoured Milk",
        "Butter and Margarine",
        "Cheese",
        "Eggs Substitutes",
        "Honey",
        "Marmalades",
        "Sour Cream and Dips",
        "Yogurt",
      ],
    },
  ];


  return (

    <footer>

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

          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-2">
                <img src={feature.icon} alt={feature.alt} loading="lazy" />
                <span>{feature.text}</span>
              </div>
              {index < features.length - 1 && (
                <span className="hidden md:inline-block text-gray-300 px-3">|</span>
              )}
            </React.Fragment>
          ))}

        </div>
      </div>

      <div className="w-[90%] mx-auto text-gray-800 py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {Links.map((category, index) => (
          <div key={index}>
            <h3 className="font-bold mb-4 uppercase text-sm">{category.title}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {category.items.map((item, id) => (
                <li
                  key={id}
                  className="cursor-pointer hover:text-blue-600 duration-200 w-fit"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
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

  )
}

export default Footer;
