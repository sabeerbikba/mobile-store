import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import links from '@/data/links';
import contactDetails from '@/data/contact';


const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">PhoneHub</h3>
          <p className="text-sm">Your one-stop shop for all things mobile.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {links.map(({ to, text }, key) => (
              <li key={key}>
                <NavLink to={to} className="hover:underline">{text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          {contactDetails.map((details, key) => (
            <p key={key}>{details.text}</p>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[
              { to: "#", className: "hover:text-blue-400", icon: <Facebook /> },
              { to: "#", className: "hover:text-blue-400", icon: <Twitter /> },
              { to: "#", className: "hover:text-blue-400", icon: <Instagram /> },
              { to: "#", className: "hover:text-blue-400", icon: <Linkedin /> },
            ].map((link, index) => (
              <NavLink key={index} to={link.to} className={link.className}>
                {link.icon}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
        <p>&copy; 2023 PhoneHub. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
