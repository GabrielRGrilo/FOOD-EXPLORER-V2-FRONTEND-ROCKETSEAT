import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import { AdminRoutes } from './admin.routes';
import { UserRoutes } from "./users.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user ? (
        user.admin == true ? (
          <AdminRoutes />
        ) : (
          <UserRoutes />
        )
      ) : (
        <AuthRoutes />
      )}
    </BrowserRouter>
  );
}
