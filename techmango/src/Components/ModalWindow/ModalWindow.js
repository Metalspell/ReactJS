import './Modal.css';
import Logo from '../Logo/Logo';
import { useState } from "react";
import axios from 'axios';
import { useMutation } from 'react-query';
import * as yup from 'yup';
import { useFormik } from 'formik';
import SubmitButton from './SubmitButton/SubmitButton';
import SocialItems from '../SocialItems/SocialItems';

const API_URL = 'https://api.qa.zgambling.com/public/password_recovery';


const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email(`Please enter a valid email`)
    .required(`Required field`),
});

const ModalWindow = ({ setIsOpen }) => {

  const [request, setrequest] = useState(null);
  const { mutateAsync, isLoading } = useMutation((data) => axios.post(API_URL, JSON.stringify(data)));
  const handleSubmit = async (values, { resetForm }) => {
    await mutateAsync(values, {
      onSuccess: () => {
        setrequest(true);
        resetForm();
      },
      onError: () => {
        setrequest(false);
        resetForm();
      },
    });
  };

  const formik = useFormik({
    validationSchema,
    initialValues: {
      email: '',
    },
    onSubmit: handleSubmit,
  });

  if (request === null) {
    return (
      <>
        <section className="modal-body">
          <Logo />
          <img className="modal-close-icon"
            onClick={() => setIsOpen(false)}
            src={require('./icons/Group110.png')}
            alt=""
          />
          <form onSubmit={formik.handleSubmit} className='email-form'>
            <label htmlFor="email"><p>Tell us your email address</p>
              <p>and we will contact you as soon as possible</p></label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder='mail@mail.com'
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.email}
              className='form-field'
            />
            <SubmitButton
              onClick={() => setIsOpen(true)}
            ></SubmitButton>
          </form>
          <SocialItems />
        </section>
      </>
    );
  }
  if (request === true) {
    return (
      <section className="modal-body">
        <Logo />
        <img className="modal-close-icon"
          onClick={() => setIsOpen(false)}
          src={require('./icons/Group110.png')}
          alt=""
        />
        <h1 className='congratulation-header'>
          Thanks, your message has been sent!
        </h1>
        <SocialItems />
      </section>
    )
  }
  if (request === false) {
    <section className="modal-body">
      <Logo />
      <img className="modal-close-icon"
        onClick={() => setIsOpen(false)}
        src={require('./icons/Group110.png')}
        alt=""
      />
      <h1 className='congratulation-header'>
        Send error. Try it again
      </h1>
      <SocialItems />
    </section>
  }
}

export default ModalWindow;