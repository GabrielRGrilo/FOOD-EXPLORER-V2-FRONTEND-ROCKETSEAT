import { Container } from './styles';

import { useAuth } from '../../hooks/auth';
import { useSearch } from '../../hooks/search';

import { Link, useNavigate } from 'react-router-dom';

import receipt from '../../assets/Receipt.svg';

import { Logo } from '../Logo';
import { Button } from '../Button';
import { Search } from '../Search';


export function Header({ admin }) {
    const { signOut } = useAuth();
    const { ingredientsSearch, search, checkURL, setCheckURL } = useSearch();
  
    const navigate = useNavigate();
  
    function handleSignOut() {
      const confirmSignOut = confirm('Tem certeza que deseja sair?');
      if (confirmSignOut) {
        signOut();
  
        navigate('/');
      }
    }
  
    function handleSearch() {
      if (checkURL == true) {
        navigate('/');
        setCheckURL(false);
      }
    }
  
    return (
      <Container>
        {admin ? (
          <nav className="admin">
            <button
              type="button"
              className="menu"
              onClick={() => navigate('/menu')}
            >
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 1C0 0.447715 0.447715 0 1 0H23C23.5523 0 24 0.447715 24 1C24 1.55228 23.5523 2 23 2H1C0.447715 2 0 1.55228 0 1ZM0 9C0 8.44772 0.447715 8 1 8H23C23.5523 8 24 8.44772 24 9C24 9.55229 23.5523 10 23 10H1C0.447715 10 0 9.55229 0 9ZM0 17C0 16.4477 0.447715 16 1 16H23C23.5523 16 24 16.4477 24 17C24 17.5523 23.5523 18 23 18H1C0.447715 18 0 17.5523 0 17Z"
                  fill="white"
                />
              </svg>
            </button>
  
            <Link to="/">
              <Logo />
              <p>admin</p>
            </Link>
  
            <Search
              defaultValue={search}
              onChange={(e) => ingredientsSearch(e.target.value)}
              onKeyDown={(e) => (e.key == 'Enter' ? handleSearch() : false)}
            />
  
            <Button title="Novo prato" onClick={() => navigate('/new-dish')} />
  
            <button type="button" className="logout" onClick={handleSignOut}>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2891 6.75L23.5391 12M23.5391 12L18.2891 17.25M23.5391 12H9.53906M9.53906 23H2.53906C2.27385 23 2.01949 22.8946 1.83196 22.7071C1.64442 22.5196 1.53906 22.2652 1.53906 22V2C1.53906 1.73478 1.64442 1.48043 1.83196 1.29289C2.01949 1.10536 2.27385 1 2.53906 1H9.53906"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </nav>
        ) : (
          <nav className="user">
            <button
              type="button"
              className="menu"
              onClick={() => navigate('/menu')}
            >
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 1C0 0.447715 0.447715 0 1 0H23C23.5523 0 24 0.447715 24 1C24 1.55228 23.5523 2 23 2H1C0.447715 2 0 1.55228 0 1ZM0 9C0 8.44772 0.447715 8 1 8H23C23.5523 8 24 8.44772 24 9C24 9.55229 23.5523 10 23 10H1C0.447715 10 0 9.55229 0 9ZM0 17C0 16.4477 0.447715 16 1 16H23C23.5523 16 24 16.4477 24 17C24 17.5523 23.5523 18 23 18H1C0.447715 18 0 17.5523 0 17Z"
                  fill="white"
                />
              </svg>
            </button>
  
            <Link to="/">
              <Logo />
            </Link>
  
            <Search />
  
            <button type="button" className="receipt">
              <img src={receipt} alt="Ícone de menu" />
              <span className="mobile">0</span>
              <span className="desktop">Pedidos (0)</span>
            </button>
  
            <button type="button" className="logout" onClick={handleSignOut}>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2891 6.75L23.5391 12M23.5391 12L18.2891 17.25M23.5391 12H9.53906M9.53906 23H2.53906C2.27385 23 2.01949 22.8946 1.83196 22.7071C1.64442 22.5196 1.53906 22.2652 1.53906 22V2C1.53906 1.73478 1.64442 1.48043 1.83196 1.29289C2.01949 1.10536 2.27385 1 2.53906 1H9.53906"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </nav>
        )}
      </Container>
    );
  }
  