import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';

import registerImg from '../assets/images/reg.jpeg';
import userIcon from '../assets/images/user.png';

import { authContext } from '../components/context/authContext';
import { BASE_URL } from './../utils/config';

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
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
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
      } else {
        dispatch({ type: 'REGISTER_SUCCESS' });
        toggleModal(); // Show modal after successful registration
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder="Username" required id="username" onChange={handleChange} />
                  </FormGroup>

                  <FormGroup>
                    <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                  </FormGroup>

                  <FormGroup>
                    <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                  </FormGroup>

                  <Button className="btn secondary__btn auth__btn" type="submit">
                    Register
                  </Button>
                </Form>

                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modal for account created successfully */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Success</ModalHeader>
        <ModalBody>Your account has been created successfully.</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => navigate('/login')}>
            Go to Login
          </Button>
        </ModalFooter>
      </Modal>
    </section>
  );
};

export default Register;
