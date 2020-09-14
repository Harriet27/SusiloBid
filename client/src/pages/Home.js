import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// redux
import { useSelector, useDispatch } from 'react-redux';
// import { GetServerTime } from '../redux/action';

// children
// import CarouselPage from '../components/Carousel';
import FilterHome from '../components/FilterHome'
import ProductHome from './ProductHome';
import SortByHome from '../components/SortByHome';

const Home = () => {

  // const [render, setRender] = useState('DESC');

  const role = useSelector(({ auth }) => auth.role_id);
  const username = useSelector(state => state.auth.username);
  // const getProduct = useSelector(({ product }) => product.product);
  // const time = useSelector(({ serverTime }) => serverTime.time);

  console.log(username);

  const dispatch = useDispatch();
  
  useEffect(() => {
    document.title = `Welcome to Swift Deal`;
  },[dispatch]);

  if (role === 1) {
    return (
      <Redirect to='/internal' />
    );
  };

  return (
    <div className="container">
      {/* <CarouselPage /> */}
      <div className="row mt-4">
        <div className="col-sm-3">
          <h2 style={{ color: "#939393" }}>Swift Deal <strong style={{ color: "#2185d0" }}>Lot List</strong></h2>
        </div>
        {/* <div className="col-sm-9">
          <hr />
        </div> */}
        <div className="row w-100">
          <div className="col-sm-3">
            <FilterHome />
            <br />
            <br />
          </div>
          <div className="col-9">
            <SortByHome />
            <ProductHome />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;