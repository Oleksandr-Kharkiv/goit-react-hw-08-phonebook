import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Container, Wrap} from './Layout.styled';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Wrap>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Wrap>
    </Container>
  );
};

export default Layout;
