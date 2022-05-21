import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate('/login');
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = emailRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name })
  };

  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center text-primary">Registration</h1>
        <SocialLogin></SocialLogin>
        <Form onSubmit={handleSubmit} className="w-50 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button className="w-50 d-block m-2 mx-auto" variant="primary" type="submit">
            Register
          </Button>
          <p>Already have an account? <Link to='/login' onClick={navigateLogin} className="text-primary text-decoration-none">Log In</Link></p>
        </Form>
      </div>
    </div>
  );
};

export default Register;