import { useState } from 'react';
import phones from '@/data/phones';
import { cn } from '@/lib/utils';
import useLocalStorageState from '@/lib/hooks/useLocalStorageState';
import type { CartItem } from './Cart';
import { NavLink } from 'react-router-dom';

type Filter = 'all' | 'new' | 'used';

const MobileSales = () => {
  const [_, setCartItems] = useLocalStorageState<CartItem[]>('cart', []);
  const [filter, setFilter] = useState<Filter>('all')

  const filteredPhones = phones.filter(phone =>
    filter === 'all' || phone.condition === filter
  );

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Mobile Sales</h1>
      <div className="mb-8 text-center">
        {[
          { label: "All Phones", value: "all" },
          { label: "New Phones", value: "new" },
          { label: "Used Phones", value: "used" },
        ].map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setFilter(value as Filter)}
            className={cn(`mx-2 px-4 py-2 rounded`, filter === value ? 'bg-blue-600 text-white' : 'bg-gray-200')}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPhones.map(({ id, image, name, condition, price }) => (
          <NavLink to={`/mobile-sales/${id}`} key={id}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className='h-[310px]'>
                <img src={image} alt={name} className="mb-4 rounded h-full m-auto" />
              </div>
              <h2 className="text-xl font-semibold mb-2">{name}</h2>
              <p className="text-gray-600 mb-2">{condition === 'new' ? 'New' : 'Used'}</p>
              <p className="text-2xl font-bold text-blue-600 mb-4">₹{price}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  addCart(id);
                }}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileSales;
