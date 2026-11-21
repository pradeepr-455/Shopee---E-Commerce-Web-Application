import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from "./pages/register/register";
import ForgetPassword from './pages/forget/forget';
import Cart from './pages/cart/cart';
import { CartProvider } from "./pages/cart/cartContext";
import ProtectedRoute from './components/protectedRoute';
import Checkout from './pages/purchase/chechout';
import MyOrders from './pages/order/order';
import { ProductProvider } from './context/productContext';
import Admin from './pages/admin/admin';
import AdminRoute from './components/adminRoute';
function App() {
  return (
    <BrowserRouter>
    <ProductProvider>
      <CartProvider>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path='/forget' element={<ForgetPassword/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path='/checkout' element={<ProtectedRoute><Checkout/></ProtectedRoute>}></Route>
            <Route path='/order' element={<ProtectedRoute><MyOrders/></ProtectedRoute>}></Route>
            <Route path='/admin' element={<AdminRoute><Admin/></AdminRoute>}></Route>          
          </Routes>
      </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
