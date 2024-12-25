import { CheckCircle2 } from 'lucide-react'

const AboutUs = () => (
   <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About PhoneHub</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
         <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
               Founded in 2010, PhoneHub has grown from a small local shop to a leading online retailer of smartphones and mobile accessories. Our journey began with a simple mission: to provide customers with the latest mobile technology at competitive prices, coupled with exceptional customer service.
            </p>
            <p className="text-gray-600 mb-4">
               Over the years, we've expanded our offerings to include both new and pre-owned devices, catering to a wide range of customer needs and budgets. Our team of experts carefully curates our selection, ensuring that every product we offer meets our high standards of quality and performance.
            </p>
         </div>
         <img
            src="/Sangeetha-mobile-store-kumta.jpg"
            alt="PhoneHub Store"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
         />
      </div>

      <div className="mb-16">
         <h2 className="text-2xl font-semibold mb-4 text-center">Our Values</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
               { title: "Customer First", description: "We prioritize our customers' needs and satisfaction in everything we do." },
               { title: "Quality Assurance", description: "We rigorously test all our products to ensure the highest quality standards." },
               { title: "Continuous Innovation", description: "We stay at the forefront of mobile technology to bring you the latest and best products." },
            ].map((value, index) => (
               <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <CheckCircle2 className="text-green-500 mb-2 inline mr-2" size={24} />
                  <h3 className="text-xl font-semibold mb-2 inline">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
               </div>
            ))}
         </div>
      </div>

      <div>
         <h2 className="text-2xl font-semibold mb-4 text-center">Our Team</h2>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
               { name: "John Doe", role: "Founder & CEO" },
               { name: "Jane Smith", role: "Head of Customer Service" },
               { name: "Mike Johnson", role: "Chief Technology Officer" },
               { name: "Sarah Brown", role: "Marketing Director" },
            ].map((member, index) => (
               <div key={index} className="text-center">
                  <img
                     src="/staff.jpeg"
                     alt={member.name}
                     width={200}
                     height={200}
                     className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
               </div>
            ))}
         </div>
      </div>
   </div>
);

export default AboutUs;
