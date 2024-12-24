import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import contactDetails from '@/data/contact';

const Contact = () => (
   <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
         <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
               We're here to help! Whether you have a question about our products, need technical support, or want to learn more about our services, our team is ready to assist you.
            </p>
            <div className="space-y-4">
               {contactDetails.map((detail, index) => (
                  <div key={index} className="flex items-start">
                     {detail.icon}
                     <p>{detail.text}</p>
                  </div>
               ))}
            </div>
         </div>
         <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
               <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
               </div>
               <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
               </div>
               <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" id="subject" name="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
               </div>
               <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required></textarea>
               </div>
               <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Send Message
               </button>
            </form>
         </div>
      </div>

      <div>
         <h2 className="text-2xl font-semibold mb-4 text-center">Visit Our Store</h2>
         <div className="aspect-w-16 aspect-h-9">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784368459395!3d40.74844797932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794729405!5m2!1sen!2sus"
               width="100%"
               height="450"
               style={{ border: 0 }}
               allowFullScreen={true}
               loading="lazy"
            ></iframe>
         </div>
      </div>
   </div>
);

export default Contact;

