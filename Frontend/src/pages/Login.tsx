import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-6 sm:px-8 lg:px-10 bg-gray-50/50 animate-fade-in">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
        
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-full opacity-50 pointer-events-none"></div>

        <div className="text-center relative z-10">
           <Link to="/" className="inline-flex items-center gap-2 mb-6 group focus:outline-none rounded-lg">
             <div className="bg-primary-600 text-white p-1.5 rounded-lg group-hover:scale-105 transition-transform shadow-sm shadow-primary-600/20">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
               </svg>
             </div>
             <span className="text-xl font-bold text-gray-900 tracking-tight">FreshCart</span>
           </Link>
           <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Welcome Back</h2>
           <p className="mt-2 text-sm text-gray-500">Sign in to your account and continue your grocery shopping.</p>
        </div>

        <form className="mt-8 space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" 
                placeholder="you@example.com" 
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
                <a href="#" className="font-semibold text-xs text-primary-600 hover:text-primary-500">Forgot password?</a>
              </div>
              <input 
                id="password" 
                name="password" 
                type="password" 
                autoComplete="current-password" 
                required 
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" 
                placeholder="••••••••" 
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold text-lg py-3 rounded-xl transition-all duration-300 transform shadow-lg shadow-primary-600/30 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500 relative z-10">
          Don't have an account?{' '}
          <Link to="/register" className="font-bold text-primary-600 hover:text-primary-500 transition-colors">
             Create one now
          </Link>
        </div>
      </div>
    </div>
  );
}
