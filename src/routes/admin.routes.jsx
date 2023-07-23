import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';


export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home admin />} />
    </Routes>
  );
}
