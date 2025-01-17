import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#1e2028] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/vect.svg" alt="Logo" className="h-8 w-8" />
              <div className="ml-2">
                <span className="text-lg font-bold">IST</span>
                <span className="text-xs block text-gray-400">Innovate Solution Technology</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses through innovative technology solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">IT Consulting</li>
              <li className="text-gray-300">Software Development</li>
              <li className="text-gray-300">Cloud Solutions</li>
              <li className="text-gray-300">Digital Marketing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Jankit Nagar B Zone</li>
              <li className="text-gray-300">Kadachanenthal, Madurai</li>
              <li className="text-gray-300">Phone: 7708255161</li>
              <li className="text-gray-300">Email: contact@ist.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Innovate Solution Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;