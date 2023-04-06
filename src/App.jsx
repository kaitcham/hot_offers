import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import { LandingPage, RegionProducts } from './pages/_index.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<h1>Dashboard Page</h1>} />
          <Route path="stats" element={<h1>Stats Page</h1>} />
          <Route path="users" element={<h1>List of all Users</h1>} />
          <Route path="add-region" element={<h1>Add New Region Page</h1>} />
          <Route path="all-products" element={<h1>All Products Page</h1>} />
          <Route path="add-product" element={<h1>Add New Product Page</h1>} />
        </Route>
        <Route path="/regions/:region" element={<RegionProducts />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
