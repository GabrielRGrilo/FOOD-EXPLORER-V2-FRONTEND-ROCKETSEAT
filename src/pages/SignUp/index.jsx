import { useState } from 'react';

import { Link } from 'react-router-dom';

import { api } from '../../services/api';

import { Container } from './styles';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);


  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!');
    }

    setLoading(true);
    api
      .post('/user', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
        navigate('/');
      })
      .catch((err) => {
        setLoading(false);
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert('Não foi possível cadastrar o usuário');
        }
      });
  }

  return (
    <Container>
      <main>
        <Logo />

        <form>
          <legend>Cadastre-se</legend>

          <Input
            label="Nome"
            type="text"
            placeholder="Exemplo: Gabriel"
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="Email"
            type="email"
            placeholder="Exemplo: exemplo@email.com.br"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Mínimo de 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="button" title="Criar conta" onClick={handleSignUp} />
          <Link to={-1}>Já tenho uma conta</Link>

        </form>
      </main>

    </Container>
  );
}
