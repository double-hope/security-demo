import { Layout } from 'components';
import HomePage from 'pages/home/Home';
import MissingPage from 'pages/missing/Missing';
import PersistLoginPage from 'pages/persist-login/PersistLogin';
import RequireAuthPage from 'pages/require-auth/RequireAuth';
import SignPage from 'pages/sign/Sign';
import UnauthorizedPage from 'pages/unauthorized/Unauthorized';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const roles = {
  USER: 'USER',
}

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='login' element={<SignPage />} />
          <Route path='unauthorized' element={<UnauthorizedPage />} />

          <Route element={<PersistLoginPage />}>
            <Route element={<RequireAuthPage allowedRoles={[roles.USER]} />}>
              <Route path='' element={<HomePage />} />
            </Route>

            <Route path='*' element={<MissingPage />} />
          </Route>

          <Route path='*' element={<MissingPage />} />
        </Route>
    </Routes>
  )
}

export { AppRouter };
