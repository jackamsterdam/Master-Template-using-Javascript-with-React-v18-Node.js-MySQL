import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../../HomeArea/Home/Home';
import PageNotFound from '../PageNotFound/PageNotFound';

function Routing() {
    return (
        <Routes>
          <Route path="/home" element={<Home/>}/>

          {/* <Route path='/product-list' element={<ProductList/>}/>
          <Route path="/add-product" element={<AddProduct/>} /> */}


          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
    );
}

export default Routing;
