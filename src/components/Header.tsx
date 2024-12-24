import { NavLink } from 'react-router-dom';
import { Phone } from 'lucide-react';

import links from '@/data/links';
import phoneHubLogo from "@/public/phone-hub.svg";

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <NavLink to="/" className="text-2xl font-bold mb-4 md:mb-0">
        <img src={phoneHubLogo} alt="phone-hub-logo" className='w-8 inline' />
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
          <Phone size={20} className="mr-2" />
          <span>(123) 456-7890</span>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
