import { Container } from './styles';
import { Form } from "/styles";

import { useAuth } from '../../hooks/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Logo} from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

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

        <Form>
          <legend>Faça o login</legend>

          <Input
            label="Email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Senha"
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="button"
            title="Entrar"
            onClick={handleSignIn}
            disabled={loading}
          />

          <Link to="/register">Criar uma conta</Link>
        </Form>
      </main>


    
    </Container>
  );
}
