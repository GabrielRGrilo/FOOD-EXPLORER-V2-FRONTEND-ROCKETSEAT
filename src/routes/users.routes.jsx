import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';
import { DishDetails } from '../pages/DishDetails';

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/dishes/:id" element={<DishDetails />} />
    </Routes>
  );
}
