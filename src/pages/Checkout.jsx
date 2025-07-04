import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/checkout/ContactForm";
import DeliveryForm from "../components/checkout/DeliveryForm";
import ShippingAndPayment from "../components/checkout/ShippingAndPayment";
import { removeFromCart, updateCart } from "../redux/slices/cartSlice";
import Form from "../components/Checkout/Form";

const Checkout = () => {
	const { cart, numOfCartItems, totalCartPrice, isLoadingUpdateCart, isLoadingDeleteCart } = useSelector((store) => store.cartReducer);
	const dispatch = useDispatch();
	return (
		<div className="container mx-auto flex flex-col gap-2 py-10 lg:flex-row">
			<div className="flex-1 space-y-10">
				<Form/>
				{/* <ContactForm /> */}
				{/* <DeliveryForm /> */}
				{/* <ShippingAndPayment /> */}
			</div>
			<div className="hidden w-px bg-gray-300 lg:block" />
			<div className="block h-px bg-gray-300 lg:hidden" />
			<div className="w-full space-y-6 lg:w-[350px]">
				{cart.map((item, index) => (
					<div
						key={index}
						className="flex items-center justify-between">

						<div className="relative">
							<div className="flex h-16 w-16 items-center justify-center rounded border border-gray-300 p-2">
								<img
									src={item?.product?.imageCover}
									alt={item?.product?.title}
									loading="lazy"
									className="h-full w-full rounded object-cover"
								/>
							</div>
							<span className="absolute -top-1 -right-1 rounded-full bg-[#666666] px-1.5 py-0.5 text-[10px] text-white">{item?.count}</span>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm font-medium">{item?.product.title}</p>
						</div>
						<button onClick={() => { isLoadingDeleteCart ? '' : dispatch(removeFromCart(item?.product._id)) }} className="px-2 underline text-red-600">Remove</button>
						<button disabled={item?.count <= 1 || isLoadingUpdateCart} onClick={() => { const newCount = item?.count - 1; dispatch(updateCart({ count: newCount, productId: item?.product._id })) }}
							className={`inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500  border border-gray-300 rounded-full focus:outline-none  ${item?.count <= 1 || isLoadingUpdateCart ? "bg-gray-300" : "bg-white hover:bg-gray-100 cursor-pointer"} focus:ring-2 focus:ring-gray-200`} type="button">
							<span className="sr-only">Quantity button</span>
							<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
							</svg>
						</button>
						<div className="text-sm font-semibold">${item?.count * item?.price}.00</div>
						<button onClick={() => { const newCount = item?.count + 1; dispatch(updateCart({ count: newCount, productId: item?.product._id })) }}
							className={`inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 border border-gray-300 rounded-full focus:outline-none ${isLoadingUpdateCart ? "bg-gray-300" : "bg-white hover:bg-gray-100 cursor-pointer"} focus:ring-2 focus:ring-gray-200`} type="button">
							<span className="sr-only">Quantity button</span>
							<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
							</svg>
						</button>

					</div>
				))}
				<div className="flex justify-between pt-2 text-sm">
					<span>Subtotal : {numOfCartItems} items</span>
					<span className="font-medium">${totalCartPrice}.00</span>
				</div>
				<div className="flex justify-between text-sm">
					<span>Shipping</span>
					<span className="font-medium text-green-600">FREE</span>
				</div>
				<div>
					<div className="flex justify-between border-t pt-4 text-base font-semibold">
						<span>Total</span>
						{/* <span>${total.toFixed(2)}</span> */}
					</div>
					<p className="text-xs text-gray-500">Including $2.40 in taxes</p>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
