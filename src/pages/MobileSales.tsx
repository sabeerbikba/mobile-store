import { useState } from 'react';
import phones from '@/data/phones';

type Filter = 'all' | 'new' | 'used';

const MobileSales = () => {
  const [filter, setFilter] = useState<Filter>('all')

  const filteredPhones = phones.filter(phone =>
    filter === 'all' || phone.condition === filter
  );

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
            className={`mx-2 px-4 py-2 rounded ${filter === value ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPhones.map(phone => (
          <div key={phone.id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={phone.image} alt={phone.name} width={300} height={300} className="mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">{phone.name}</h2>
            <p className="text-gray-600 mb-2">{phone.condition === 'new' ? 'New' : 'Used'}</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">${phone.price}</p>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileSales;
