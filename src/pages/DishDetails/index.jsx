import { Container } from './styles';

import { api } from '../../services/api';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';

export function DishDetails({ admin }) {
  const [dish, setDish] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const params = useParams();
  const navigate = useNavigate();

  const image = `${api.defaults.baseURL}/files/${dish.image}`;

  function handleEditDish() {
    navigate(`/dishes/${params.id}/edit`);
  }

  function addToCart() {
    alert('O item foi adicionado ao carrinho');

    setQuantity(1);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);

      setDish(response.data);
    }

    async function fetchIngredients() {
      const response = await api.get(`/ingredients/${params.id}`);

      setIngredients(response.data);
    }

    fetchDish();
    fetchIngredients();
  }, []);

  useEffect(() => {
    setQuantity(quantity);
  }, [quantity]);

  return (
    <Container>
      <Header admin={admin} />

      {dish && (
        <main>
          <Link to={-1}>
            <svg
              width="12"
              height="23"
              viewBox="0 0 12 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7071 0.863938C12.0976 1.25446 12.0976 1.88763 11.7071 2.27815L2.41421 11.571L11.7071 20.8639C12.0976 21.2545 12.0976 21.8876 11.7071 22.2782C11.3166 22.6687 10.6834 22.6687 10.2929 22.2782L0.292893 12.2782C-0.0976311 11.8876 -0.0976311 11.2545 0.292893 10.8639L10.2929 0.863938C10.6834 0.473414 11.3166 0.473414 11.7071 0.863938Z"
                fill="white"
              />
            </svg>
            voltar
          </Link>

          <div>
            <img src={image} alt="Imagem do prato" />

            <div>
              <div className="details">
                <h2>{dish.name}</h2>

                <p>{dish.description}</p>

                {ingredients.length > 0 && (
                  <div className="ingredients">
                    {ingredients.map((ingredient) => (
                      <span key={ingredient.id}>{ingredient.title}</span>
                    ))}
                  </div>
                )}
              </div>

              {admin ? (
                <Button title="Editar prato" onClick={handleEditDish} />
              ) : (
                <div className="order">
                  <div>
                    <button
                      onClick={() =>
                        quantity > 1 ? setQuantity(quantity - 1) : false
                      }
                    >
                      <svg
                        width="21"
                        height="3"
                        viewBox="0 0 21 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.394043 1.49997C0.394043 1.03137 0.773923 0.651489 1.24253 0.651489H19.9092C20.3778 0.651489 20.7577 1.03137 20.7577 1.49997C20.7577 1.96858 20.3778 2.34846 19.9092 2.34846H1.24253C0.773923 2.34846 0.394043 1.96858 0.394043 1.49997Z"
                          fill="white"
                        />
                      </svg>
                    </button>

                    <input
                      type="number"
                      min="1"
                      max="99"
                      value={quantity < 1 ? '1' : quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />

                    <button
                      onClick={() =>
                        quantity < 99 ? setQuantity(quantity + 1) : false
                      }
                    >
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.242676 10.4999C0.242676 10.0313 0.622555 9.65145 1.09116 9.65145H19.7578C20.2264 9.65145 20.6063 10.0313 20.6063 10.4999C20.6063 10.9685 20.2264 11.3484 19.7578 11.3484H1.09116C0.622555 11.3484 0.242676 10.9685 0.242676 10.4999Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.4245 0.318115C10.8931 0.318115 11.273 0.697995 11.273 1.1666V19.8333C11.273 20.3019 10.8931 20.6818 10.4245 20.6818C9.95589 20.6818 9.57601 20.3019 9.57601 19.8333V1.1666C9.57601 0.697995 9.95589 0.318115 10.4245 0.318115Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>

                  <button onClick={addToCart}>
                    <svg
                      width="17.58"
                      height="14.87"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.96094 8C5.96094 7.44771 6.40865 7 6.96094 7H19.9609C20.5132 7 20.9609 7.44771 20.9609 8C20.9609 8.55228 20.5132 9 19.9609 9H6.96094C6.40865 9 5.96094 8.55228 5.96094 8Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.96094 12C5.96094 11.4477 6.40865 11 6.96094 11H19.9609C20.5132 11 20.9609 11.4477 20.9609 12C20.9609 12.5523 20.5132 13 19.9609 13H6.96094C6.40865 13 5.96094 12.5523 5.96094 12Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.04672 0.585787C1.4218 0.210714 1.9305 0 2.46094 0H24.4609C24.9914 0 25.5001 0.210714 25.8751 0.585787C26.2502 0.960861 26.4609 1.46957 26.4609 2V21C26.4609 21.3466 26.2815 21.6684 25.9867 21.8506C25.6918 22.0329 25.3237 22.0494 25.0137 21.8944L21.4609 20.118L17.9081 21.8944C17.6266 22.0352 17.2952 22.0352 17.0137 21.8944L13.4609 20.118L9.90815 21.8944C9.62662 22.0352 9.29525 22.0352 9.01372 21.8944L5.46094 20.118L1.90815 21.8944C1.59816 22.0494 1.23002 22.0329 0.935206 21.8506C0.64039 21.6684 0.460938 21.3466 0.460938 21V2C0.460938 1.46957 0.671652 0.960859 1.04672 0.585787ZM24.4609 2L2.46094 2L2.46094 19.382L5.01372 18.1056C5.29525 17.9648 5.62662 17.9648 5.90815 18.1056L9.46094 19.882L13.0137 18.1056C13.2952 17.9648 13.6266 17.9648 13.9081 18.1056L17.4609 19.882L21.0137 18.1056C21.2952 17.9648 21.6266 17.9648 21.9081 18.1056L24.4609 19.382V2Z"
                        fill="white"
                      />
                    </svg>
                    Pedido ∙ R$ {(dish.price * quantity).toFixed(2)}
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      )}

      <Footer />
    </Container>
  );
}
