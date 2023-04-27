import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFound from './pages/NotFound';
import { useState, useEffect } from 'react'
import axios from 'axios'
import './styles/Common.scss';

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    // 서버에서 상품정보 가져옴
    const getProducts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
      setProducts(res.data.slice(0, 10));
    }
    getProducts()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/Products/' element={<ProductPage products={products} />} />
          <Route path='/Products/:productId' element={<ProductDetailPage products={products} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
