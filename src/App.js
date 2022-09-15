import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './page/HomePage';
import { Footer } from './components/Footer/Footer';
import { Modal } from './components/Modal/Modal';
import { useState } from 'react';
import { MyCartPage } from './page/MyCartPage';
import { OrderPage } from './page/OrderPage';
import { OrderPageDetail } from './page/OrderPageDetail';
import { Loading } from './components/Loading/Loading';
import { useSelector } from 'react-redux';

function App() {
  const [visible, setVisible] = useState(false);
  const { loading } = useSelector((state) => state.loadingReducer);
  return (
    <BrowserRouter>
      {loading && <Loading />}
      <Modal visible={visible} setVisible={setVisible} />
      <div className='flex flex-col min-h-screen justify-between'>
        <Header setVisible={setVisible} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<MyCartPage />} />
          <Route path='/orderPage' element={<OrderPage />} />
          <Route
            path='/orderPageDetail/:id'
            element={<OrderPageDetail />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
