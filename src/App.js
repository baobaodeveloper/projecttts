import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './page/HomePage';
import { Footer } from './components/Footer/Footer';
import { Modal } from './components/Modal/Modal';
import { useState } from 'react';
import { MyCartPage } from './page/MyCartPage';
import { OrderPage } from './page/OrderPage';
import { OrderPageDetail } from './page/OrderPageDetail';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <BrowserRouter>
      <Modal visible={visible} setVisible={setVisible} />
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
    </BrowserRouter>
  );
}

export default App;
