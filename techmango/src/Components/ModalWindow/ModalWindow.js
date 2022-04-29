import './Modal.css';
import Logo from '../Logo/Logo';
import { useState } from "react";
import axios from 'axios';
import { useMutation } from 'react-query';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { useFormik } from 'formik';

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
    initialValues: {
      email: '',
    },
    onSubmit: handleSubmit,
  });

  if (request === null) {
    return (
      <div className="modal-body">
        <Logo />
        <img className="modal-close-icon"
          onClick={() => setIsOpen(false)}
          src={require('./icons/Group110.png')}
          alt=""
        />

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  if (request === true) {
    return (
      <h1>Hhhhhhhhhhhhhhhhhhhhhhhhhh</h1>
    )
  }
}

export default ModalWindow;