import { useCart } from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
    onCartClick: () => void;
}

export function Navbar({ onCartClick }: NavbarProps) {
    const { cartCount } = useCart();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;
    const navItemClass = (path: string) => `
    text-sm font-bold transition-colors ${isActive(path) ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}
  `;

    return (
        <nav className="glass-panel sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between border-b border-gray-100/50">
            {/* Brand & Left Navigation */}
            <div className="flex items-center gap-10">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group focus:outline-none rounded-lg focus-visible:ring-2 focus-visible:ring-primary-500">
                    <div className="bg-primary-600 text-white p-2 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-sm shadow-primary-600/20">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 tracking-tight">
                        FreshCart
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8 relative">
                    <Link to="/" className={navItemClass('/')}>Home</Link>
                    
                    {/* Categories Mega Dropdown */}
                    <div className="relative group/nav">
                        <Link to="/categories" className={`flex items-center gap-1.5 py-4 ${navItemClass('/categories')}`}>
                            Categories
                            <svg className="w-4 h-4 text-gray-400 group-hover/nav:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </Link>
                        
                        {/* Dropdown Panel Container (Absolute) */}
                        <div className="absolute top-full -left-24 mt-0 w-max min-w-[32rem] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover/nav:translate-y-0 z-[100]">
                            {/* Invisible bridge to maintain hover */}
                            <div className="absolute -top-4 left-0 w-full h-4"></div>
                            
                            <div className="p-8 grid grid-cols-2 gap-8">
                                {/* Fresh Foods */}
                                <div>
                                    <div className="flex items-center gap-2 mb-4 text-green-600">
                                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                                        <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2 flex-grow">Fresh Shop</h4>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Link to="/categories" className="text-sm font-medium text-gray-500 hover:text-primary-600 hover:translate-x-1 transition-all">Organic Produce</Link>
                                        <Link to="/categories" className="text-sm font-medium text-gray-500 hover:text-primary-600 hover:translate-x-1 transition-all">Dairy & Free-Range Eggs</Link>
                                        <Link to="/categories" className="text-sm font-medium text-gray-500 hover:text-primary-600 hover:translate-x-1 transition-all">Premium Meats & Seafood</Link>
                                        <Link to="/categories" className="text-sm font-medium text-gray-500 hover:text-primary-600 hover:translate-x-1 transition-all">Artisan Bakery</Link>
                                    </div>
                                </div>
                                {/* Pantry & More */}
                                <div>
                                    <div className="flex items-center gap-2 mb-4 text-orange-500">
                                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11v9h-2v-9m-4 0v9h-2v-9m-4 0v9H7v-9m4-4a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2 flex-grow">Pantry Staples</h4>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Link to="/categories" className="text-sm font-medium text-gray-500 hover:text-primary-600 hover:translate-x-1 transition-all">Pasta, Rice & Grains</Link>
                                        <Link to="/categories" className="text-sm font-medium text-gray-500 hover:text-primary-600 hover:translate-x-1 transition-all">Snacks & Confectionery</Link>
                                        <Link to="/categories" className="text-sm font-medium text-gray-500 hover:text-primary-600 hover:translate-x-1 transition-all">Craft Beverages & Coffee</Link>
                                        <Link to="/categories" className="text-sm font-medium text-gray-500 hover:text-primary-600 hover:translate-x-1 transition-all">Frozen Meals & Desserts</Link>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Footer Action */}
                            <div className="bg-gray-50/80 backdrop-blur-sm p-4 rounded-b-2xl border-t border-gray-100 flex justify-between items-center group/link">
                                <p className="text-sm text-gray-500 font-medium ml-4">Can't find what you're looking for?</p>
                                <Link to="/categories" className="text-primary-600 text-sm font-bold hover:text-primary-700 flex items-center gap-1 mr-4">
                                    Browse the full catalog
                                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link to="/about" className={navItemClass('/about')}>About Us</Link>
                    <Link to="/contact" className={navItemClass('/contact')}>Contact</Link>
                </div>
            </div>

            {/* Search Bar - Hidden on small mobile screens */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
                <div className="relative w-full text-gray-400 focus-within:text-primary-600 group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-primary-600">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-11 pr-3 py-2.5 border border-gray-200 rounded-full leading-5 bg-gray-50/50 backdrop-blur-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 sm:text-sm transition-all duration-300"
                        placeholder="Search our fresh catalog..."
                    />
                </div>
            </div>

            {/* Right Actions */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Auth Links */}
        <div className="hidden sm:flex items-center gap-3 mr-2">
           <Link to="/login" className="text-sm font-bold text-gray-600 hover:text-primary-600 transition-colors px-2">
             Log In
           </Link>
           <Link to="/register" className="text-sm font-bold bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-xl transition-colors shadow-sm shadow-primary-600/20">
             Sign Up
           </Link>
        </div>

        {/* Mobile Menu Button (Placeholder for visual completeness) */}
        <button className="lg:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>

        {/* Cart Icon */}
        <button 
          onClick={onCartClick}
          className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg group"
          aria-label="Toggle cart"
        >
          <div className="group-hover:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          {cartCount > 0 && (
            <span className="absolute top-1 right-1 inline-flex items-center justify-center min-w-[20px] h-[20px] px-1.5 text-[10px] font-black leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full border-2 border-white shadow-sm">
              {cartCount > 99 ? '99+' : cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
