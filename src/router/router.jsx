import { Layout, SignInForm, SignUpForm } from 'components';
import MissingPage from 'pages/missing/Missing';
import SignPage from 'pages/sign/Sign';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='login' element={<SignPage />} />
          <Route path='sign-up' element={<SignUpForm />} />
          <Route path='sign-in' element={<SignInForm />} />
          <Route path='*' element={<MissingPage />} />
        </Route>
    </Routes>
  )
}

export { AppRouter };
