import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { setModal, FetchDataByName } from '../redux/action';

// child
import LoginModal from './LoginModal';
import ProfileModal from './ProfileModal';

// style
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown, Button } from 'react-bootstrap';
import { CaretDownOutlined } from '@ant-design/icons';
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart, FaWallet } from "react-icons/fa";

// image
import NoName from '../asset/no_profile.jpg';
// import { MDBFormInline, MDBIcon } from 'mdbreact';
import Swal from 'sweetalert2';

const Header = () => {

  const [modalProfile, setModalProfile] = useState(false);
  const [search, setSearch] = useState('');
  const [input, setInput] = useState(false);
  const role = useSelector(({ auth }) => auth.role_id);

  const gState = useSelector(({ auth, modal }) => {
    return {
      isLogged: auth.logged,
      uName: auth.username,
      modalShow: modal.modalShow
    };
  });

  const dispatch = useDispatch();

  const handleChange = e => setSearch(e.target.value);

  const handleClick = () => {
    if (search) {
      setInput(true);
      dispatch(FetchDataByName(search));
    } 
    setSearch('');
  };
  
  const { isLogged, uName, modalShow } = gState;

  const handleAlert = () => {
    Swal.fire(
      'Permission Denied',
      'Please login before accessing this feature',
      'error',
    );
  };

  if (role === 3) {
    // SELLER
    return (
      <Navbar expand="lg" className="p-3">
      <Navbar.Brand className="ml-5 font-weight-bold" style={{ color: '#2185d0' }}>Swift Deal.co</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="mr-5">
        <Nav className="mr-auto">
          <Nav.Link className="ml-3">
            <Link to='/' style={{ textDecoration: 'none', color: '#8C8E94' }}>Home</Link>
          </Nav.Link>
          {
            role === 3
            ?
            <Nav.Link className="ml-3 mr-3">
              <Link to='/edit-profile' style={{ textDecoration: 'none', color: '#8C8E94' }}>
                Profile
              </Link>
            </Nav.Link>
            :
            <Nav.Link className="ml-3 mr-3" onClick={handleAlert}>
              Profile
            </Nav.Link>
          }
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">
              <Link to='/add-product' >Add Product</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <Link to='/products' >Check Product</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <div className="input-group d-flex align-items-center mr-5">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search"
          aria-label="Recipient's username" 
          aria-describedby="basic-addon2" 
          onChange={e => handleChange(e)}
          value={search}
        />
        <div className="input-group-append d-flex align-items-center" >
          <span className="input-group-text search-btn" id="basic-addon2" style={{ height: '2.4rem' }}>
            <IoIosSearch onClick={handleClick}/>
          </span>
        </div>
      </div>
      {
        role === 3
        ?
        <Link to='/cart'>
          <span className='mr-3 input-group-text' style={{height:'2.4rem', color:'black', cursor:'pointer'}}>
            <FaShoppingCart />
          </span>
        </Link>
        :
        <div onClick={handleAlert}>
          <span className='mr-3 input-group-text' style={{height:'2.4rem', color:'black', cursor:'pointer'}}>
            <FaShoppingCart />
          </span>
        </div>
      }
      {
        role === 3
        ?
        <Link to={`/wallet?username=${uName}`}>
          <span className='mr-5 input-group-text' style={{ height: '2.4rem', cursor:'pointer' }}>
            <FaWallet />
          </span>
        </Link>
        :
        <div onClick={handleAlert}>
          <span className='mr-5 input-group-text' style={{ height: '2.4rem', cursor:'pointer' }}>
            <FaWallet />
          </span>
        </div>
      }
      {
        !isLogged
        ?
        <>
          <button type='button' className='btn btn-outline-primary' onClick={() => dispatch(setModal())}>Login</button>
          <Link to='/register'>
            <Button className='mr-5 ui teal button' variant="outline-success">Register</Button>
          </Link>
        </>
        :
        <>
          <img
            src={NoName}
            alt='No Prof Pict'
            className='rounded-circle mr-3 ml-7'
            width='28.5rem' height='28.5rem'
            style={{ textDecoration: 'none' }}
          />
          <h6 className='mr-5 hover-text' style={{ color: '#939393' }} onClick={() => setModalProfile(true)}>{uName} <CaretDownOutlined /></h6>
        </>
      }
      <LoginModal
        show={modalShow}
        onHide={() => dispatch(setModal())}
      />
      <ProfileModal
        show={modalProfile}
        onHide={() => setModalProfile(false)}
      />
      {input ? <Redirect to='/' /> : null}
    </Navbar>
    );
  };

  // BUYER
  return (
    <Navbar expand="lg" className="p-3">
      <Link to='/'>
        <Navbar.Brand className="ml-5 font-weight-bold" style={styles.title}>Swift Deal.co</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="mr-5">
        <Nav className="mr-auto">
          <Nav.Link className="ml-3">
            <Link to='/' style={{ textDecoration: 'none', color: '#8C8E94' }}>Home</Link>
          </Nav.Link>
          {
            role === 2
            ?
            <Nav.Link className="ml-3 mr-3">
              <Link to='/edit-profile' style={{ textDecoration: 'none', color: '#8C8E94' }}>
                Profile
              </Link>
            </Nav.Link>
            :
            <Nav.Link className="ml-3 mr-3" onClick={handleAlert}>
              Profile
            </Nav.Link>
          }
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <div className="input-group d-flex align-items-center mr-5">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search"
          aria-label="Recipient's username" 
          aria-describedby="basic-addon2" 
          onChange={e => handleChange(e)}
          value={search}
        />
        <div className="input-group-append d-flex align-items-center" >
          <span className="input-group-text search-btn" id="basic-addon2" style={{ height: '2.4rem' }}>
            <IoIosSearch onClick={handleClick}/>
          </span>
        </div>
      </div>
      {
        role === 2
        ?
        <Link to='/cart'>
          <span className='mr-3 input-group-text' style={{height:'2.4rem', color:'black', cursor:'pointer'}}>
            <FaShoppingCart />
          </span>
        </Link>
        :
        <div onClick={handleAlert}>
          <span className='mr-3 input-group-text' style={{height:'2.4rem', color:'black', cursor:'pointer'}}>
            <FaShoppingCart />
          </span>
        </div>
      }
      {
        role === 2
        ?
        <Link to={`/wallet?username=${uName}`}>
          <span className='mr-5 input-group-text' style={{ height: '2.4rem', cursor:'pointer' }}>
            <FaWallet />
          </span>
        </Link>
        :
        <div onClick={handleAlert}>
          <span className='mr-5 input-group-text' style={{ height: '2.4rem', cursor:'pointer' }}>
            <FaWallet />
          </span>
        </div>
      }
      {
        !isLogged
          ?
          <>
            <Button className='mr-3 ui basic primary button' variant="outline-primary" onClick={() => dispatch(setModal())}>Login</Button>
            <Link to='/register'>
              <Button className='mr-5 ui primary button' variant="outline-primary">Register</Button>
            </Link>
          </>
          :
          <>
            <img
              src={NoName}
              alt='No Prof Pict'
              className='rounded-circle mr-3 ml-7'
              width='28.5rem' height='28.5rem'
              style={{ textDecoration: 'none' }}
            />
            <h6 className='mr-5 hover-text' style={{ color: '#939393' }} onClick={() => setModalProfile(true)}>{uName} <CaretDownOutlined /></h6>
          </>
      }
      <LoginModal
        show={modalShow}
        onHide={() => dispatch(setModal())}
      />
      <ProfileModal
        show={modalProfile}
        onHide={() => setModalProfile(false)}
      />
      {input ? <Redirect to='/' /> : null}
    </Navbar>
  );
};

const styles = {
  title: {
    color: '#2185d0',
    border:'solid #2185d0',
    padding:'7px',
    borderRadius:'10px',
  },
};

export default Header;