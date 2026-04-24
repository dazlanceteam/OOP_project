import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Checkout } from './pages/Checkout';
import { Categories } from './pages/Categories';

// Admin Imports
import { AdminLayout } from './components/admin/AdminLayout';
import { Dashboard } from './pages/admin/Dashboard';
import { Orders } from './pages/admin/Orders';
import { Products } from './pages/admin/Products';
import { Customers } from './pages/admin/Customers';
import { Settings } from './pages/admin/Settings';
import { Payments } from './pages/admin/Payments';
import { UserManagement } from './pages/admin/UserManagement';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          {/* Public Storefront Routes rendered with global Navbar/Footer */}
          <Route element={<Layout><Outlet /></Layout>}>
            {/* Landing Page */}
            <Route path="/" element={<Home />} />
            
            {/* Auth Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Storefront Pages */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />

            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />

            {/* Product Detail Page */}
            <Route path="/product/:id" element={<ProductDetail />} />
          </Route>

          {/* Admin Backend Routes rendered with AdminLayout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} /> {/* Default admin route */}
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<Products />} />
            <Route path="customers" element={<Customers />} />
            <Route path="payments" element={<Payments />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
