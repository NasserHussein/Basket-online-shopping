import React from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from 'react-redux';

export default function Form() {
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);
    const [onlinePayment, setOnlinePayment] = useState(true);
    const navigate = useNavigate();
    const { cartId } = useSelector((store) => store.cartReducer);
    const headers = { token: localStorage.getItem("userToken") };
    const validationSchema = Yup.object().shape({
        details: Yup.string().required("Details is required"),
        phone: Yup.string().required("Phone is required").matches(/^01[0125][0-9]{8}$/, "Must be a valid Egyptian number with 11 digits starting with 01 \nex.(01012345678)."),
        city: Yup.string().required("City is required")
    });	
    async function checkout(shippingAddress) {
        if(onlinePayment){
            try {
                setLoading(true);
                let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`, { shippingAddress }, { headers });
                setApiError(null);
                setLoading(false);
                location.href = data.session.url;
            } catch (error) {
                setApiError(error.response.data.message);
                setLoading(false);
            }
        }else{
            try {
                setLoading(true);
                let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}?url=http://localhost:5173`, { shippingAddress }, { headers });
                setApiError(null);
                setLoading(false);
                navigate('/allorders');
                toast.success(data.status);
            } catch (error) {
                setApiError(error.response.data.message);
                setLoading(false);
            }
        }

    }	
    const formik = useFormik({
        initialValues: {
            "details": "",
            "phone": "",
            "city": ""
        },
        validationSchema,
        onSubmit: checkout
    });	    
  return <>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Check Out</h2>
        </div>
        <form onSubmit={formik.handleSubmit} className="max-w-full me-auto">
            {apiError && <div className="text-white text-lg  mb-6 flex justify-center">
                <div className="bg-red-500 w-fit py-1 px-3 flex">
                    <div className="me-1 mt-[6.9px] rounded-full size-4 border bg-white flex justify-center items-center">
                        <i className="fa-solid fa-exclamation text-sm text-main"></i>
                    </div>
                    Failed : {apiError}
                </div>
            </div>}
            <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                    Enter Your phone
                </label>
                <input type="tel" name="phone" id="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}
                    className="border border-gray-300 text-gray-900 text-base rounded-md focus:ring-main focus:border-main outline-0 block w-full py-4 px-2.5"/>
                {formik.errors.phone && formik.touched.phone && <div className="text-red-500 text-sm mt-2 ms-2">{formik.errors.phone}</div>}
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">
                    Enter Your city
                </label>
                <input type="text" name="city" id="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur}
                    className="border border-gray-300 text-gray-900 text-base rounded-md focus:ring-main focus:border-main outline-0 block w-full py-4 px-2.5"/>
                {formik.errors.city && formik.touched.city && <div className="text-red-500 text-sm mt-2 ms-2">{formik.errors.city}</div>}
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900">
                    Enter details
                </label>
                <input type="text" name="details" id="details" value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur}
                    className="border border-gray-300 text-gray-900 text-base rounded-md focus:ring-main focus:border-main outline-0 block w-full py-4 px-2.5"/>
                {formik.errors.details && formik.touched.details && <div className="text-red-500 text-sm mt-2 ms-2">{formik.errors.details}</div>}
            </div>
            <div className="space-y-8">
                <div>
                    <h2 className="text-xl font-semibold mb-4">Payment method</h2>
                    <div onClick={()=>setOnlinePayment(true)} className="relative mb-6">
                        <div className={`w-full cursor-pointer  border ${onlinePayment && 'border-[#1773B0] bg-[#F0F5FF]'} rounded px-4 py-3 text-sm text-gray-700`}>
                            <div className="flex justify-between items-center">
                                <span className=" font-bold">Online payment</span>
                                <span className=" font-bold">Free</span>
                            </div>
                        </div>
                    </div>
                        <div onClick={() => setOnlinePayment(false)} className="relative mb-8">
                        <div className={`w-full cursor-pointer  border ${!onlinePayment && 'border-[#1773B0] bg-[#F0F5FF]'} rounded px-4 py-3 text-sm text-gray-700`}>
                            <div className="flex justify-between items-center">
                                <span className=" font-bold">Cash payment</span>
                                <span className=" font-bold">Free</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <button type="submit" disabled={loading}
            className={`text-white bg-[#303841] ${loading ? "bg-gray-600" : "hover:bg-main cursor-pointer"}  focus:ring-1 focus:outline-none focus:ring-red-300 font-medium  text-sm w-full sm:w-auto px-3 py-2.5 text-center`}>
            <span className="pe-2">{loading ? "Loading" : "Check Out"}</span>
            {loading ?
                <i className="fa-solid fa-spinner fa-spin-pulse"></i> :
                <i className="fa-solid fa-arrow-right-long -mb-1"></i>
            }
        </button>
        </form>  
  </>
}
