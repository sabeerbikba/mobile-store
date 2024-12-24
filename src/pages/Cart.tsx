import { NavLink } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import useLocalStorageState from '@/lib/hooks/useLocalStorageState';
import phones from '@/data/phones';
import { useState } from 'react';

interface CartItem {
   id: number
   quantity: number
};

const Cart = () => {
   // const [cartItems, setCartItems] = useLocalStorageState<CartItem[]>('cart', []);
   const [cartItems, setCartItems] = useState<CartItem[]>([
      { id: 1, quantity: 2 },
      { id: 2, quantity: 1 },
   ]);

   const updateQuantity = (id: number, newQuantity: number) => {
      if (newQuantity >= 0) {
         setCartItems((items: CartItem[]) =>
            items.map(item =>
               item.id === id ? { ...item, quantity: newQuantity } : item
            )
         );
      }
   };



   // const updateQuantity = (id: number, newQuantity: number) => {
   //    if (newQuantity >= 0) {
   //       setCartItems((items) =>
   //          items.map(item =>
   //             item.id === id ? { ...item, quantity: newQuantity } : item
   //          )
   //       )
   //    }
   // };

   const removeItem = (id: number) => {
      setCartItems(items => items.filter(item => item.id !== id))
   };

   const total = phones.reduce((sum, phone) => {
      const cartItem = cartItems.find(item => item.id + 1 === phone.id);
      return sum + (cartItem ? phone.price * cartItem.quantity : 0);
   }, 0);


   return (
      <div className="container mx-auto px-4 py-16">
         <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

         {cartItems.length === 0 ? (
            <div className="text-center py-8">
               <p className="text-xl mb-4">Your cart is empty</p>
               <NavLink to="/mobile-sales" className="text-blue-600 hover:underline">
                  Continue Shopping
               </NavLink>
            </div>
         ) : (
            <>
               <div className="space-y-8">
                  {cartItems.map((item, id) => (
                     <div key={id} className="flex items-center space-x-4 border-b pb-4">
                        <img src={phones[item.id].image} alt={phones[item.id].name} width={80} height={80} className="rounded-md" />
                        <div className="flex-grow">
                           <h2 className="text-lg font-semibold">{phones[item.id].name}</h2>
                           <p className="text-gray-600">${phones[item.id].price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                           <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label="Decrease quantity"
                           >
                              <Minus className="h-4 w-4" />
                           </button>
                           <input
                              type="number"
                              min="0"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                              className="w-16 text-center"
                           />
                           <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                           >
                              <Plus className="h-4 w-4" />
                           </button>
                        </div>
                        <p className="font-semibold w-24 text-right">
                           ${(phones[item.id].price * item.quantity).toFixed(2)}
                        </p>
                        <button
                           onClick={() => removeItem(item.id)}
                           aria-label="Remove item"
                        >
                           <Trash2 className="h-4 w-4" />
                        </button>
                     </div>
                  ))}
               </div>

               <div className="mt-8 space-y-4">
                  <div className="flex justify-between text-xl font-semibold">
                     <span>Total:</span>
                     <span>${total.toFixed(2)}</span>
                  </div>
                  <button className="w-full">
                     Proceed to Checkout
                  </button>
                  <div className="text-center">
                     <NavLink to="/mobile-sales" className="text-blue-600 hover:underline">
                        Continue Shopping
                     </NavLink>
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default Cart;
