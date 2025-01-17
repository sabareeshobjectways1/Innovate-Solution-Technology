import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsOpen(false); // Close mobile menu
    navigate(path);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-[#10171f] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => handleNavigation('/')} className="flex items-center">
              <img src="/vect.svg" alt="Logo" className="h-10 w-10" />
              <div className="ml-2">
                <span className="text-xl font-bold">IST</span>
                <span className="text-xs block text-gray-400">Innovate Solution Technology</span>
              </div>
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-[#01b4db] to-[#ff56a8] text-white'
                      : 'text-gray-300 hover:bg-[#1e2028] hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#1e2028]"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-current transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-gradient-to-r from-[#01b4db] to-[#ff56a8] text-white'
                    : 'text-gray-300 hover:bg-[#1e2028] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;