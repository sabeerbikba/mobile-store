import { useState, FormEvent, type ChangeEvent } from 'react';
import { Truck, CreditCard } from 'lucide-react';
import useLocalStorageState from '@/lib/hooks/useLocalStorageState';
import type { CartItem } from './Cart';
import phones from '@/data/phones';
import { NavLink } from 'react-router-dom';

const Checkout = () => {

   const [cartItems, _] = useLocalStorageState<CartItem[]>('cart', []);
   const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      address: '',
      city: '',
      postalCode: '',
      paymentMethod: ''
   });
   const [errors, setErrors] = useState<Record<string, string>>({});
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData(prev => ({ ...prev, [name]: value }))
   };

   const validateForm = () => {
      const newErrors: Record<string, string> = {}
      if (formData.fullName.length < 2) newErrors.fullName = "Full name must be at least 2 characters."
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email address."
      if (formData.address.length < 5) newErrors.address = "Address must be at least 5 characters."
      if (formData.city.length < 2) newErrors.city = "City must be at least 2 characters."
      if (formData.postalCode.length < 5) newErrors.postalCode = "Postal code must be at least 5 characters."
      if (!formData.paymentMethod) newErrors.paymentMethod = "Please select a payment method."
      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
   }

   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault()
      if (!validateForm()) return;

      try {
         setIsSubmitting(true)
         const data = new FormData();
         Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
         });

         const response = await fetch("/api/endpoint", {
            method: "POST",
            body: data,
         });

         if (!response.ok) {
            throw new Error('failed');
         }

         alert('Order placed successfully!');
         setIsSubmitting(false);
      } catch (err) {
         console.log(err);
         alert('Order placed failed!');
         setIsSubmitting(false);
      }
   };

   const total = phones.reduce((sum, phone) => {
      const cartItem = cartItems.find(item => item.id + 1 === phone.id);
      return sum + (cartItem ? phone.price * cartItem.quantity : 0);
   }, 0);

   return (
      <div className="container mx-auto px-4 py-16">
         <NavLink to="/mobile-sales" className="text-blue-600 hover:underline mb-4 inline-block">
            &larr; Back to all phones
         </NavLink>
         <h1 className="text-4xl font-bold mb-8">Checkout</h1>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
               <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
               <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                     <label htmlFor="fullName" className="block mb-1">Full Name</label>
                     <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                     />
                     {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                     <label htmlFor="email" className="block mb-1">Email</label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                     />
                     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                     <label htmlFor="address" className="block mb-1">Address</label>
                     <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                     />
                     {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>
                  <div>
                     <label htmlFor="city" className="block mb-1">City</label>
                     <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                     />
                     {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>
                  <div>
                     <label htmlFor="postalCode" className="block mb-1">Postal Code</label>
                     <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                     />
                     {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                  </div>

                  <hr className="my-8" />

                  <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
                  <div className="space-y-2">
                     <div>
                        <input
                           type="radio"
                           id="credit"
                           name="paymentMethod"
                           value="credit"
                           checked={formData.paymentMethod === 'credit'}
                           onChange={handleInputChange}
                           className="mr-2"
                        />
                        <label htmlFor="credit">Credit Card</label>
                     </div>
                     <div>
                        <input
                           type="radio"
                           id="paypal"
                           name="paymentMethod"
                           value="paypal"
                           checked={formData.paymentMethod === 'paypal'}
                           onChange={handleInputChange}
                           className="mr-2"
                        />
                        <label htmlFor="paypal">PayPal</label>
                     </div>
                  </div>
                  {errors.paymentMethod && <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>}

                  <button
                     type="submit"
                     className="w-full mt-8 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
                     disabled={isSubmitting}
                  >
                     {isSubmitting ? 'Processing...' : 'Place Order'}
                  </button>
               </form>
            </div>

            <div>
               <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
               <div className="bg-gray-100 p-6 rounded-lg">
                  {cartItems.map(({ id, quantity }) => (
                     <div key={id} className="flex justify-between mb-2">
                        <span>{phones[id].name} x {quantity}</span>
                        <span>₹{(phones[id].price * quantity).toFixed(2)}</span>
                     </div>
                  ))}
                  <hr className="my-4" />
                  <div className="flex justify-between mb-2">
                     <span>Subtotal</span>
                     <span>₹{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                     <span>Shipping</span>
                     <span className='text-green-800'>Free</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between font-semibold">
                     <span>Total</span>
                     <span>₹{total.toFixed(2)}</span>
                  </div>
               </div>
               <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                     <Truck className="mr-2" />
                     <span>Free shipping on orders over ₹1000</span>
                  </div>
                  <div className="flex items-center">
                     <CreditCard className="mr-2" />
                     <span>Secure payment processing</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Checkout;
