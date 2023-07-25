import { Container, Content } from './styles';

import { useState, useEffect } from 'react';

import { useSearch } from '../../hooks/search';

import { api } from '../../services/api';

import { DishCard } from '../../components/DishCard';

import macarrons from "../../assets/macarrons.png"

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { DishCarousel } from '../../components/DishCarousel';

export function Home({ admin }) {
  const [dishes, setDishes] = useState([]);
  const { search } = useSearch();

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?name=${search}`);

      setDishes(response.data);
    }

    fetchDishes();
  }, [search]);
  return (
    <Container>
      <Header admin={admin} />

      <Content>
        <img src={macarrons} alt="Imagem de macarrons coloridos" />

        <div>
          <h1>Sabores inigualáveis</h1>

          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Content>

      <main>
        {dishes.filter((dish) => dish.category == 'refeicoes').length > 0 && (
          <DishCarousel admin={admin} title="Refeições">
            {dishes.map(
              (dish) =>
                dish.category == 'refeicoes' && (
                  <DishCard
                    key={String(dish.id)}
                    admin={admin}
                    id={dish.id}
                    name={dish.name}
                    image={dish.image}
                    price={dish.price}
                    description={dish.description}
                  />
                )
            )}
          </DishCarousel>
        )}

        {dishes.filter((dish) => dish.category == 'sobremesas').length > 0 && (
          <DishCarousel admin={admin} title="Sobremesas">
            {dishes.map(
              (dish) =>
                dish.category == 'sobremesas' && (
                  <DishCard
                    key={String(dish.id)}
                    admin={admin}
                    id={dish.id}
                    name={dish.name}
                    image={dish.image}
                    price={dish.price}
                    description={dish.description}
                  />
                )
            )}
          </DishCarousel>
        )}

        {dishes.filter((dish) => dish.category == 'bebidas').length > 0 && (
          <DishCarousel admin={admin} title="Bebidas">
            {dishes.map(
              (dish) =>
                dish.category == 'bebidas' && (
                  <DishCard
                    key={String(dish.id)}
                    admin={admin}
                    id={dish.id}
                    name={dish.name}
                    image={dish.image}
                    price={dish.price}
                    description={dish.description}
                  />
                )
            )}
          </DishCarousel>
        )}
      </main>

      <Footer />
    </Container>
  );
}
