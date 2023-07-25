import { Container } from './styles';

import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useSearch } from '../../hooks/search';

import close from '../../assets/Close.svg';

import { Search } from '../../components/Search';
import { Footer } from '../../components/Footer';

export function Menu({ admin }) {
  const { signOut } = useAuth();
  const { ingredientsSearch, search, setSearch, checkURL, setCheckURL } =
    useSearch();

  const navigate = useNavigate();

  function handleSignOut() {
    const confirmSignOut = confirm('Tem certeza que deseja sair?');
    if (confirmSignOut) {
      signOut();

      navigate('/');

      setSearch('');
    }
  }

  function handleSearch() {
    navigate('/');
    setCheckURL(false);
  }

  return (
    <Container>
      <header>
        <Link to={-1}>
          <img src={close} alt="" />
          Menu
        </Link>
      </header>

      <nav>
        <Search
          defaultValue={search}
          onChange={(e) => ingredientsSearch(e.target.value)}
          onKeyDown={(e) => (e.key == 'Enter' ? handleSearch() : false)}
        />

        <ul>
          {admin ? (
            <li>
              <Link to={'/new-dish'}>Novo prato</Link>
            </li>
          ) : (
            false
          )}
          <li>
            <a onClick={handleSignOut}>Sair</a>
          </li>
        </ul>
      </nav>

      <Footer />
    </Container>
  );
}
