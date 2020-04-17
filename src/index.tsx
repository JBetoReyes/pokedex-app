import React from 'react';
import ReactDom from 'react-dom';
import Home from './home/Home.component';
import Layout from './layout/Layout.component';

ReactDom.render(
  <Layout>
    <Home />
  </Layout>,
  document.getElementById('app')
);
