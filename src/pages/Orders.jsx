import React, { useState } from 'react';
import axios from 'axios';
import { FaTimes } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { jwtDecode } from 'jwt-decode';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading/Loading';


function Orders() {

  const [selectedOrder, setSelectedOrder] = useState(null);
  const { token } = useSelector((store) => store.authReducer);
  const decoded = jwtDecode(token);

  function getAllOrders() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${decoded.id}`);
  }

  const { data, isLoading } = useQuery({
    queryKey: ['allOrders'],
    queryFn: getAllOrders,
  });

  const orders = data?.data;

  if (isLoading) return <p className="text-center py-8 text-lg"><Loading /></p>;
  if (!orders || orders.length === 0) return <p className="text-center py-20 text-lg">No orders found.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center uppercase mb-8">All Orders</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="py-3 px-4 text-left">Order</th>
              <th className="py-3 px-4 text-left">Date Create</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Paid At</th>
              <th className="py-3 px-4 text-left">Delivered</th>
              <th className="py-3 px-4 text-left">Total</th>
              <th className="py-3 px-4 text-left">Cart Contents</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-t hover:bg-gray-50 text-sm">
                <td className="py-3 px-4">#{order._id.slice(-6)}</td>
                <td className="py-3 px-4">{new Date(order.createdAt).toISOString().split('T')[0]}</td>
                <td className="py-3 px-4">{order.isPaid ? 'Paid' : 'Not Paid'}</td>
                <td className="py-3 px-4">{order.paidAt ? new Date(order.paidAt).toISOString().split('T')[0] : '--'}</td>
                <td className="py-3 px-4">{order.isDelivered ? "Delivered" : "is Waiting"}</td>
                <td className="py-3 px-4">
                  {order.totalOrderPrice} EGP for {order.cartItems.length} {order.cartItems.length > 1 ? "items" : "item"}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition"
                  >
                    view →
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" >

          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-white rounded-lg p-6"
            onClick={(e) => e.stopPropagation()} >

            <button className="absolute top-4 right-4 text-xl text-gray-600 hover:text-black"
              onClick={() => setSelectedOrder(null)}
            >
              <FaTimes />
            </button>

            <h3 className="text-xl font-bold mb-4 text-gray-800">Cart Items</h3>

            {selectedOrder.cartItems.map((item) => (
              <div key={item._id} className="flex gap-4 items-center border-b py-4">
                <img
                  src={item.product.imageCover}
                  alt={item.product.title}
                  className="w-20 h-20 object-cover rounded-md border"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.product.title}</h4>
                  <p className="text-sm text-gray-500">Quantity: {item.count}</p>
                  <p className="text-sm text-gray-500">Price: {item.price} EGP</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
