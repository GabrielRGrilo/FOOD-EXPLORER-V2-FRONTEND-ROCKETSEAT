import { Container} from './styles';

import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

import { Logo} from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  async function handleSignIn() {
    setLoading(true);
    const loadingStatus = await signIn({ email, password });
    setLoading(loadingStatus);
  }

  return (
    <Container>
      <main>
        <Logo />

        <form>
          <legend>Faça o login</legend>

          <Input
            label="Email"
            type="email"
            placeholder="exemplo@email.com.br"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Mínimo de 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="button"
            title="Entrar"
            onClick={handleSignIn}
            disabled={loading}
          />
         <Link to="/register">Criar uma conta</Link>

        </form>
      </main>


    
    </Container>
  );
}
