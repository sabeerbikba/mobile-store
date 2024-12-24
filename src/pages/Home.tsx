import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Welcome to PhoneHub</h1>
            <p className="text-xl mb-8">Your one-stop shop for the latest smartphones and amazing deals on pre-owned devices.</p>
            <NavLink to="/mobile-sales" className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300">
              Shop Now
            </NavLink>
          </div>
        </div>
        <img
          src="/placeholder.svg"
          alt="Latest Smartphones"
          width={600}
          height={400}
          className="absolute right-0 bottom-0 hidden lg:block"
        />
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['iPhone 13', 'Samsung Galaxy S21', 'Google Pixel 6'].map((phone, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/placeholder.svg" alt={phone} width={400} height={300} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{phone}</h3>
                  <p className="text-gray-600 mb-4">Experience the latest in mobile technology.</p>
                  <NavLink to="/mobile-sales" className="text-blue-600 font-semibold hover:underline">
                    Learn More <ArrowRight className="inline-block ml-1" size={16} />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About PhoneHub</h2>
            <p className="text-gray-600 mb-8">
              At PhoneHub, we're passionate about connecting you with the latest mobile technology.
              Our team of experts curates a selection of top-quality new and pre-owned devices to
              ensure you always get the best value for your money.
            </p>
            <NavLink to="#" className="text-blue-600 font-semibold hover:underline">
              Learn More About Us <ArrowRight className="inline-block ml-1" size={16} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose PhoneHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Wide Selection', description: 'Choose from the latest models and pre-owned devices.' },
              { title: 'Expert Support', description: 'Our knowledgeable team is here to help you make the right choice.' },
              { title: 'Quality Guaranteed', description: 'All our pre-owned devices undergo rigorous quality checks.' },
              { title: 'Competitive Pricing', description: 'Get the best value for your money with our pricing strategy.' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location and Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Visit Our Store</h2>
              <p className="text-gray-600 mb-4">
                Experience our products firsthand and get expert advice from our team.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-2 text-blue-600 flex-shrink-0" />
                  <p>123 Phone Street, Gadget City, TC 12345</p>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-2 text-blue-600 flex-shrink-0" />
                  <p>(123) 456-7890</p>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-2 text-blue-600 flex-shrink-0" />
                  <p>info@phonehub.com</p>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-2 text-blue-600 flex-shrink-0" />
                  <p>Mon-Sat: 10am-8pm, Sun: 12pm-6pm</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="PhoneHub Store Location"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Phone?</h2>
          <p className="text-xl mb-8">Browse our selection of new and pre-owned devices today!</p>
          <NavLink to="/mobile-sales" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Shop Now
          </NavLink>
        </div>
      </section>
    </div>
  )
}

