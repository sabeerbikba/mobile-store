import phones from '@/data/phones';
import { NavLink, useParams } from 'react-router-dom';
import useLocalStorageState from '@/lib/hooks/useLocalStorageState';
import type { CartItem } from './Cart';
import NoPage from './NoPage';

const PhoneDetails = () => {
   const { id } = useParams();
   const phone = phones.find(p => (p.id) === parseInt(id as string));
   const [_, setCartItems] = useLocalStorageState<CartItem[]>('cart', []);

   const addCart = (id: number, quantity: number = 1) => {
      setCartItems(items => {
         const existingItem = items.find(item => item.id === id);
         const isAddingFirstVal = items.length === 0;
         if (existingItem) {
            return items.map(item =>
               item.id === id ? { ...item, quantity: item.quantity + quantity } : item
            );
         } else {
            return [...items, { id, quantity: isAddingFirstVal ? quantity - 1 : quantity }];
         }
      });
   };

   return phone === undefined ? (<NoPage />) : (
      <div className="container mx-auto px-4 py-8">
         <NavLink to="/mobile-sales" className="text-blue-600 hover:underline mb-4 inline-block">
            &larr; Back to all phones
         </NavLink>
         <div className="grid md:grid-cols-2 gap-8">
            <div>
               <img
                  src={phone.image}
                  alt={phone.name}
                  className="w-full h-auto rounded-lg shadow-md"
               />
            </div>
            <div>
               <h1 className="text-3xl font-bold mb-4">{phone.name}</h1>
               <p className="text-xl text-gray-600 mb-4">{phone.brand}</p>
               <p className="text-2xl font-bold text-blue-600 mb-4">₹{phone.price.toLocaleString()}</p>
               <p className="text-lg capitalize mb-4">{phone.condition}</p>
               <p className="text-gray-700 mb-6">{phone.description}</p>
               <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <h2 className="text-xl font-semibold mb-2">Specifications</h2>
                  <ul className="space-y-2">
                     {Object.entries(phone.specs).map(([key, value]) => (
                        <li key={key}>
                           <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                        </li>
                     ))}
                  </ul>
               </div>
               <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => { if (id) addCart(parseInt(id)); }}
               >
                  Add to Cart
               </button>
            </div>
         </div>
      </div>
   );
};

export default PhoneDetails;
