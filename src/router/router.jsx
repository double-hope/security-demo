import { Layout } from 'components';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>

        </Route>
    </Routes>
  )
}

export { AppRouter };
