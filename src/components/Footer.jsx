import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../config';


const Footer = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              📞 <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white">{BUSINESS_INFO.phone}</a>
            </p>
            <p className="text-gray-400 mb-2">
              💬 <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">{BUSINESS_INFO.whatsapp}</a>
            </p>
            <p className="text-gray-400">
              📍 {BUSINESS_INFO.address}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>⚡ Electrical Services</li>
              <li>🚰 Plumbing Services</li>
              <li>🪵 Carpentry Services</li>
              <li>🏗️ Civil Services</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Five Star Home Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
