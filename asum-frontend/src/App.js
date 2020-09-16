import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RegisterSelectPage from './pages/RegisterSelectPage'
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

import HostApplyPage from './pages/host/HostApplyPage';
import HostAccountPage from './pages/host/HostAccountPage';
import HostProductPage from './pages/host/HostProductPage';
import HostSalesPage from './pages/host/HostSalesPage';
import HostInquiryPage from './pages/host/HostInquiryPage';
import { Helmet } from 'react-helmet-async';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>ASUM</title>
      </Helmet>
      <Route component={LandingPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={PostListPage} path="/postlist" />
      <Route component={RegisterPage} path="/register" />
      <Route component={RegisterSelectPage} path="/registerSelect" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />

      <Route component={HostApplyPage} path="/host/apply" exact />
      <Route component={HostAccountPage} path="/host/account" />
      <Route component={HostProductPage} path="/host/product" />
      <Route component={HostSalesPage} path="/host/sales" />
      <Route component={HostInquiryPage} path="/host/inquiry" />
    </>
  );
};

export default App;