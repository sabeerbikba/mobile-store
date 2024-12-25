import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import contactDetails from '@/data/contact';
import type { FormEvent } from 'react';

const Contact = () => {
   const handleSubmit = async (event: FormEvent) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);

      try {
         // TODO: add correct url
         const repponse = await fetch('/api/endpoint', {
            method: "POST",
            body: formData,
         });

         if (!repponse.ok) {
            throw new Error('failed Error');
         }

         // if not failed do something!
      } catch (err) {
         console.log(err);
         // show failed to usser
      }
   };

   return (
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
               <form onSubmit={handleSubmit} className="space-y-4">
                  {["name", "email", "subject", "message"].map(input => {
                     const Element = input === "message" ? "textarea" : "input";
                     return (
                        <div key={input}>
                           <label htmlFor={input} className="block text-sm font-medium text-gray-700 mb-1">
                              {input.charAt(0).toUpperCase() + input.slice(1) + ": "}
                           </label>
                           <Element
                              type={input === "email" ? "email" : input === "message" ? "" : "text"}
                              id={input}
                              name={input}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              rows={4}
                              required
                           />
                        </div>
                     );
                  })}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.006854137571!2d74.40642497646948!3d14.426768386039315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc190f78fb0b11%3A0xb420212ebba23ce!2sSangeetha%20Gadgets%20-%20Kumta!5e0!3m2!1sen!2sin!4v1735120141774!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
               />
            </div>
         </div>
      </div>
   );
};

export default Contact;

