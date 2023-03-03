import { Navigate, Route } from 'react-router';
import { Routes } from 'react-router-dom';

import CityPage from 'pages/CityPage';
import HomePage from 'pages/HomePage';
import Layout from 'pages/Layout';

const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/city/:city" element={<CityPage />} />
    </Route>
    <Route path="/report" element={<div>Report</div>} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
