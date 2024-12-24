import { MapPin, Phone, Mail, Clock } from "lucide-react";

const iconClass = "mr-4 text-blue-600 flex-shrink-0";

const contactDetails = [
  {
    icon: <MapPin className={iconClass} />,
    text: "123 Phone Street, Gadget City, TC 12345",
  },
  {
    icon: <Phone className={iconClass} />,
    text: "(123) 456-7890",
  },
  {
    icon: <Mail className={iconClass} />,
    text: "info@phonehub.com",
  },
  {
    icon: <Clock className={iconClass} />,
    text: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm",
  },
];

export default contactDetails;
