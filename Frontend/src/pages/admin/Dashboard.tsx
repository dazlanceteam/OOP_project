export function Dashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between animate-fade-in">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Overview</h1>
        <div className="flex gap-2">
           <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-200 shadow-sm text-gray-600">
              Last 30 Days
           </span>
           <button className="bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors">
              Download Report
           </button>
        </div>
      </div>

      {/* 1. Progress Banner */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-900">Monthly Fulfillment Goal</h2>
            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full">Below Target</span>
          </div>
          <p className="text-gray-500 text-sm font-medium">Currently 121 orders behind the monthly target of 5,000. Increase promotion budget.</p>
        </div>
        <div className="flex-1 w-full max-w-sm space-y-2">
           <div className="flex justify-between text-sm font-bold text-gray-900">
             <span>4,879</span>
             <span className="text-gray-400">5,000</span>
           </div>
           <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
             <div className="bg-gradient-to-r from-primary-400 to-primary-600 h-full rounded-full w-[97.5%]"></div>
           </div>
           <p className="text-right text-xs text-primary-600 font-bold">97.5% Completed</p>
        </div>
      </div>

      {/* 2. Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4 group hover:border-primary-200 transition-colors">
          <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <p className="text-gray-500 font-medium mb-1 drop-shadow-sm">Pending Orders</p>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-black text-gray-900 tracking-tight">142</span>
              <span className="text-sm font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-md mb-1 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
                +5.4%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4 group hover:border-primary-200 transition-colors">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
          </div>
          <div>
            <p className="text-gray-500 font-medium mb-1 drop-shadow-sm">Processing</p>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-black text-gray-900 tracking-tight">85</span>
              <span className="text-sm font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mb-1 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                -2.1%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4 group hover:border-primary-200 transition-colors">
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
          </div>
          <div>
            <p className="text-gray-500 font-medium mb-1 drop-shadow-sm">Dispatched</p>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-black text-gray-900 tracking-tight">1,204</span>
              <span className="text-sm font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mb-1 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                +12.4%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4 group hover:border-primary-200 transition-colors">
          <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <p className="text-gray-500 font-medium mb-1 drop-shadow-sm">Delivered Weekly</p>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-black text-gray-900 tracking-tight">3,448</span>
              <span className="text-sm font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mb-1 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                +8.1%
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Charts and Analytics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
         {/* Main Chart Card */}
         <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
               <div>
                  <h3 className="text-lg font-bold text-gray-900">Orders vs. Sales</h3>
                  <p className="text-sm text-gray-500">Comparing total fulfillment against revenue generated.</p>
               </div>
               <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block px-3 py-2">
                 <option>Last 7 days</option>
                 <option>Last 30 days</option>
                 <option>This Year</option>
               </select>
            </div>
            
            {/* Visual SVG Placeholder for an Area Chart */}
            <div className="w-full h-64 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center relative overflow-hidden">
               <svg className="absolute bottom-0 w-full h-full text-primary-100" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path fill="currentColor" d="M0,100 L0,50 Q25,20 50,60 T100,30 L100,100 Z" opacity="0.5" />
                  <path fill="currentColor" className="text-primary-200" d="M0,100 L0,70 Q20,30 40,80 T100,40 L100,100 Z" opacity="0.5" />
               </svg>
               <span className="relative z-10 text-gray-400 font-bold bg-white/80 px-4 py-2 rounded-lg backdrop-blur-sm shadow-sm">Area Chart Visualization</span>
            </div>
         </div>

         {/* Side Metric Cards */}
         <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-6 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <h3 className="text-gray-300 font-medium mb-2 relative z-10">Total Sales Amount</h3>
               <div className="flex items-end gap-3 relative z-10">
                 <span className="text-4xl font-extrabold tracking-tight">$124,560.00</span>
                 <span className="text-sm font-bold text-green-400 mb-1">+4.2%</span>
               </div>
               <p className="text-gray-400 text-sm mt-4 relative z-10">Projected to hit $150k by EOM.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 group">
               <div className="flex justify-between items-start mb-4">
                 <div className="bg-primary-50 p-3 rounded-xl text-primary-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                 </div>
               </div>
               <h3 className="text-gray-500 font-medium mb-1 drop-shadow-sm">Total Company Bonus Pool</h3>
               <div className="flex items-end gap-3">
                 <span className="text-3xl font-black text-gray-900 tracking-tight">$8,240.00</span>
               </div>
               <div className="w-full bg-gray-100 h-2 rounded-full mt-4 overflow-hidden">
                 <div className="bg-primary-500 h-full rounded-full w-[65%]"></div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
