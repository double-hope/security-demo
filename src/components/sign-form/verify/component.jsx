import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast.success('Confirm your e-mail and sign in!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

const Verify = () => {

    const navigate = useNavigate();

    useEffect(() => {
        notify();
        setTimeout(() => {
            navigate('/');
        }, 2000);
    }, [navigate]);

  return (
    <div>
        <ToastContainer />
        Verify your  email!
        Don't get a letter?
        Resend 
    </div>
  )
}

export { Verify };