import { api } from '../../services/api';

import { Container } from './styles';

import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Ingredients } from '../../components/Ingredients';
import { Footer } from '../../components/Footer';

export function EditDish() {
  const params = useParams();
  const navigate = useNavigate();

  const [dish, setDish] = useState({});

  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState("Selecione a imagem");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');

  dish.name = name ?? dish.name;
  dish.description = description ?? dish.description;
  dish.image = image ?? dish.image;
  dish.price = price ?? dish.price;
  dish.category = category ?? dish.category;

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);

    setNewIngredient('');
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleUpdateDish() {
    const dishForm = new FormData();
    dishForm.append('name', dish.name);
    dishForm.append('price', dish.price);
    dishForm.append('description', dish.description);
    dishForm.append('category', dish.category);
    dishForm.append('ingredients', JSON.stringify(ingredients));

    {
      image ? dishForm.append('image', image) : false;
    }

    try {
      const response = await api.put(`/dishes/${params.id}`, dishForm);

      alert(response.data);

      navigate('/');
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert('Não foi possível alterar o prato');
      }
    }
  }

  async function handleDeleteDish() {
    const confirmDelete = confirm('Tem certeza que deseja excluir esse prato?');
    if (confirmDelete) {
      try {
        await api.delete(`/dishes/${params.id}`);

        alert('Prato excluído com sucesso.');

        navigate('/');
      } catch (err) {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert('Não foi possível excluir o prato.');
        }
      }
    }
  }

  useEffect(() => {
    async function handleDish() {
      const response = await api.get(`/dishes/${params.id}`);

      setDish(response.data);
    }

    async function handleIngredients() {
      const response = await api.get(`/ingredients/${params.id}`);

      setIngredients(response.data);
    }

    handleDish();
    handleIngredients();
  }, []);

  return (
    <Container>
      <Header admin />

      <main>
        <Link to={-1}>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.27586 0.338155C8.54509 0.607387 8.54509 1.0439 8.27586 1.31313L1.86922 7.71977L8.27586 14.1264C8.54509 14.3956 8.54509 14.8321 8.27586 15.1014C8.00663 15.3706 7.57011 15.3706 7.30088 15.1014L0.406758 8.20726C0.137526 7.93802 0.137526 7.50151 0.406758 7.23228L7.30088 0.338155C7.57011 0.0689224 8.00663 0.0689224 8.27586 0.338155Z"
              fill="white"
            />
          </svg>
          Voltar
        </Link>

        <h1>Editar prato</h1>

        <div className="row">
          <div className="image item">
            <p>Imagem do prato</p>

            <label htmlFor="dish-image">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.2929 0.292893C11.6834 -0.0976311 12.3166 -0.0976311 12.7071 0.292893L17.9571 5.54289C18.3476 5.93342 18.3476 6.56658 17.9571 6.95711C17.5666 7.34763 16.9334 7.34763 16.5429 6.95711L12 2.41421L7.45711 6.95711C7.06658 7.34763 6.43342 7.34763 6.04289 6.95711C5.65237 6.56658 5.65237 5.93342 6.04289 5.54289L11.2929 0.292893Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 1.49012e-08C12.5523 1.49012e-08 13 0.447715 13 1V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V1C11 0.447715 11.4477 1.49012e-08 12 1.49012e-08Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 14C1.55228 14 2 14.4477 2 15V22H22V15C22 14.4477 22.4477 14 23 14C23.5523 14 24 14.4477 24 15V22C24 22.5304 23.7893 23.0391 23.4142 23.4142C23.0391 23.7893 22.5304 24 22 24H2C1.46957 24 0.960861 23.7893 0.585787 23.4142C0.210714 23.0391 0 22.5304 0 22V15C0 14.4477 0.447715 14 1 14Z"
                  fill="white"
                />
              </svg> 
              Upload

              {dish.image ? dish.image.name : 'Selecione o arquivo'}
            </label>

            <input
              type="file"
              accept="image/png, image/jpeg"
              name="image"
              id="dish-image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <Input
            label="Nome"
            type="text"
            defaultValue={dish.name}
            placeholder="Ex.: Salada Ceasar"
            onChange={(e) => setName(e.target.value)}
          />

          <div className="item dish-category">
            <label htmlFor="category">Categoria</label>

            <select
              name="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="refeicoes">Refeições</option>
              <option value="sobremesas">Sobremesas</option>
              <option value="bebidas">Bebidas</option>
              {dish.category == 'refeicoes' && (
                <option
                  defaultValue={dish.category}
                  selected
                  style={{ display: 'none' }}
                  hidden={true}
                >
                  Refeições
                </option>
              )}
              {dish.category == 'sobremesas' && (
                <option
                  defaultValue={dish.category}
                  selected
                  style={{ display: 'none' }}
                  hidden={true}
                >
                  Sobremesas
                </option>
              )}
              {dish.category == 'bebidas' && (
                <option
                  defaultValue={dish.category}
                  selected
                  style={{ display: 'none' }}
                  hidden={true}
                >
                  Bebidas
                </option>
              )}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="item">
            <p>Ingredientes</p>

            <div className="ingredients">
              <Ingredients
                isNew
                placeholder="Adicionar"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />

              {ingredients.map((ingredient, index) => (
                <Ingredients
                  key={String(index)}
                  value={ingredient.title || ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))}
            </div>
          </div>

          <Input
            label="Preço"
            type="number"
            min="0.00"
            step="1"
            defaultValue={dish.price}
            placeholder="R$ 35.00"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="item">
          <label htmlFor="description">Descrição</label>

          <textarea
            name="description"
            id="description"
            defaultValue={dish.description}
            placeholder="A Salada Caesar é uma opção refrescante para o verão."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="buttons">
          <Button title="Excluir prato" onClick={handleDeleteDish} />
          <Button title="Salvar alterações" onClick={handleUpdateDish} />
        </div>
      </main>

      <Footer />
    </Container>
  );
}
