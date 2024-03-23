import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';

import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';

import { authContext } from '../components/context/authContext';
import { BASE_URL } from './../utils/config';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  });
  const [modal, setModal] = useState(false);
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const toggleModal = () => setModal(!modal);

  const handleClick = async e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
      });

      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
      } else {
        dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
        toggleModal(); // Show modal after successful login
      }
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
                  </FormGroup>

                  <FormGroup>
                    <input type="password" placeholder='Password' required id='password' onChange={handleChange} />
                  </FormGroup>

                  <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                </Form>

                <p>Don't have an account? <Link to='/register'>Create new</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modal for login success */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Success</ModalHeader>
        <ModalBody>You have logged in successfully.</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => navigate('/')}>Go to Home</Button>
        </ModalFooter>
      </Modal>
    </section>
  );
};

export default Login;
