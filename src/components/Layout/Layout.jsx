import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Container} from './Layout.styled';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
