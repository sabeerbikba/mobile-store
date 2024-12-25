import { matchPath, NavLink, useLocation } from 'react-router-dom';
import { Phone, ShoppingCart } from 'lucide-react';
import links from '@/data/links';
import useLocalStorageState from '@/lib/hooks/useLocalStorageState';
import type { CartItem } from '@/pages/Cart';

const Header = () => {
  const { pathname } = useLocation();
  const isSalesPage =
    matchPath("/mobile-sales", pathname) || matchPath("/mobile-sales/:id", pathname);
  const [cartItems, _] = useLocalStorageState<CartItem[]>('cart', []);



  return (
    <header className="bg-blue-500 text-white p-4 sticky top-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold mb-4 md:mb-0">
          <img src="/phone-hub.svg" alt="phone-hub-logo" className='w-8 inline' />
          PhoneHub
        </NavLink>
        <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <ul className="flex space-x-4">
            {links.map(({ to, text }, key) => (
              <li key={key}>
                <NavLink to={to} className="hover:underline">{text}</NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <Phone size={20} className="mr-1" />
            <a href="tel:+1234567890">(123) 456-7890</a>
          </div>
          {isSalesPage && (
            <NavLink to="/mobile-sales/cart" className="flex">
              <ShoppingCart />
              {cartItems.length !== 0 && (
                <span className='relative bottom-3 left-[-5px] rounded-full text-sm h-6 w-6 bg-red-600 px-2 py-0.5'>
                  {cartItems.length}
                </span>
              )}
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
