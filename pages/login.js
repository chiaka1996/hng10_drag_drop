import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Sidebar from '../Components/SideBar/SideBar';
import cs from '../styles/login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [details, setDetails] = useState({
    email: '',
    password: ''
  });

  const [emailError, setEmailError] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);
  const requiredDetails = {
    username: 'user@example.com',
    password: '1Password'
  };

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

  const checkIfUserIsLoggedIn = () => {
    const checkedIn = localStorage.getItem('galleryUser');
    if (checkedIn) {
      router.push('/gallery');
    }
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  const togglePassword = () => {
    setShowPassword(x => !x);
  };

  const onFocusEmailInput = () => {
    if (emailRegex.test(details.email)) {
      setEmailFocus(true);
    }
  };

  const onBlurEmailInput = () => {
    if (emailRegex.test(details.email)) {
      setEmailFocus(true);
    } else {
      setEmailFocus(false);
    }
  };

  const onFocusPasswordInput = () => {
    if (!details.password.length) {
      setPasswordFocus(true);
    }
  };

  const onBlurPasswordInput = () => {
    if (!details.password.length) {
      setPasswordFocus(true);
    } else {
      setEmailFocus(false);
    }
  };

  const onChangeDetails = e => {
    const { name } = e.target;
    const { value } = e.target;

    setDetails({
      ...details,
      [name]: value
    });

    if (name === 'email') {
      setEmailError('');
      if (!emailRegex.test(value)) {
        setEmailError('invalid email');
      } else {
        setEmailFocus(true);
      }
    }

    if (name === 'password') {
      setPasswordError('');
      if (!value.length) {
        setPasswordError('password cannot be empty');
      } else {
        setPasswordFocus(true);
      }
    }
  };

  const onClickLogin = async () => {
    try {
      const { email, password } = details;
      if (!email || !password) {
        toast.error('please fill all fields', {
          position: 'top-right',
          theme: 'colored'
        });
        return false;
      }
      if (emailError === '' && passwordError === '') {
        if (
          email.toLowerCase() !== requiredDetails.username ||
          password !== requiredDetails.password
        ) {
          toast.error('Incorrect login details', {
            position: 'top-right',
            theme: 'colored'
          });
          return false;
        }

        localStorage.setItem('galleryUser', 'user');
        router.push('/gallery');
      }
    } catch (error) {
      toast.error(`${error.message}`, {
        position: 'top-right',
        theme: 'colored'
      });
    }
  };
  return (
    <div className={cs.loginBody}>
      <NavBar page="login" />
      <Sidebar page="login" />

      <main className={cs.loginContainer}>
        <ToastContainer />
        <div className={cs.loginHeader}>Welcome</div>

        <div
          className={`${cs.inputContainer} ${
            emailError.length > 0
              ? cs.inputContainerError
              : emailFocus
              ? cs.inputContainerSuccess
              : ''
          }`}
        >
          <label>Enter your username</label>
          <br />
          <input
            type="email"
            placeholder="chiaka@gmail.com"
            value={details.email}
            name="email"
            onChange={onChangeDetails}
            onFocus={onFocusEmailInput}
            onBlur={onBlurEmailInput}
          />
          <div className={cs.error}>{emailError}</div>
        </div>

        <div
          className={`${cs.inputContainer} ${
            passwordError.length > 0
              ? cs.inputContainerError
              : passwordFocus
              ? cs.inputContainerSuccess
              : ''
          }`}
        >
          <label>Enter your password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={details.password}
            name="password"
            onChange={onChangeDetails}
            onFocus={onFocusPasswordInput}
            onBlur={onBlurPasswordInput}
          />
          {showPassword ? (
            <Image
              src="/showPassword.svg"
              width="24"
              height="24"
              alt="password icon"
              className={
                passwordError.length > 0
                  ? cs.passwordIconError
                  : cs.passwordIcon
              }
              onClick={togglePassword}
            />
          ) : (
            <Image
              src="/hidePassword.svg"
              width="24"
              height="24"
              alt="password icon"
              className={
                passwordError.length > 0
                  ? cs.passwordIconError
                  : cs.passwordIcon
              }
              onClick={togglePassword}
            />
          )}
          <div className={cs.error}>{passwordError}</div>
        </div>

        <div className={cs.loginBtnDiv}>
          <button onClick={onClickLogin}>Log in</button>
        </div>
      </main>
    </div>
  );
};

export default Login;
