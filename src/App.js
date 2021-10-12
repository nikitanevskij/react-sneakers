import React from "react";
import axios from "axios";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [sneakers, setSneakers] = React.useState([]); // карточки кроссовок на главной
  const [cardSneakers, setCardSneakers] = React.useState([]); //карточки кроссовок в корзине
  const [cardFavorite, setCardFavorite] = React.useState([]); //карточки кроссовок в закладках
  const [closeDrawer, setCloseDrawer] = React.useState(false); // закрытие корзины
  const [itemInput, setItemInput] = React.useState(""); // хранилище input

  React.useEffect(() => {
    // fetch("https://6161517ee46acd001777c003.mockapi.io/items")
    //   .then((res) => res.json())
    //   .then((items) => setSneakers(items));
    axios
      .get("https://6161517ee46acd001777c003.mockapi.io/items")
      .then((res) => setSneakers(res.data));
    // получаем кроссовки из БД для главной страницы
    axios
      .get("https://6161517ee46acd001777c003.mockapi.io/cart")
      .then((res) => setCardSneakers(res.data));
    // получаем кроссовки из БД для корзины
    axios
      .get("https://6161517ee46acd001777c003.mockapi.io/favorites")
      .then((res) => setCardFavorite(res.data));
  }, []);

  const setToCard = (obj) => {
    axios.post("https://6161517ee46acd001777c003.mockapi.io/cart", obj);
    setCardSneakers((prev) => [...prev, obj]);
  }; //добавляем кроссовки в хранилище корзины

  const sumToCard = (arr) => arr.reduce((acc, num) => acc + num.price, 0); // получаем итоговую сумму товаров в корзине

  const valueInput = (e) => {
    return setItemInput(e.target.value);
  }; // вытягиваем текст из input

  const onRemove = (id) => {
    axios.delete(`https://6161517ee46acd001777c003.mockapi.io/cart/${id}`);
    setCardSneakers((prev) => prev.filter((item) => item.id !== id));
  }; // удаляем кроссовки из корзины

  const favoriteCart = async (obj) => {
    try {
      if (cardFavorite.find((items) => items.id === obj.id)) {
        axios.delete(
          `https://6161517ee46acd001777c003.mockapi.io/favorites/${obj.id}`
        );
        // setCardFavorite((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://6161517ee46acd001777c003.mockapi.io/favorites",
          obj
        );
        setCardFavorite((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
    }
  }; // добавляем понравившиеся кроссовки d favorites

  return (
    <div className="wrapper clear">
      {/*блок корзины*/}
      {closeDrawer && (
        <Drawer
          onClickClose={() => setCloseDrawer(false)}
          sneakers={cardSneakers}
          itogo={sumToCard(cardSneakers)}
          removeCart={onRemove}
        />
      )}

      {/*верхний блок Header и кнопка корзины*/}
      <Header
        onClickClose={() => setCloseDrawer(true)}
        itogo={sumToCard(cardSneakers)}
      />

      <Route path="/favorite" exact>
        <Favorites cardFavorite={cardFavorite} favoriteCart={favoriteCart} />
      </Route>

      <Route path="/" exact>
        <Home
          itemInput={itemInput}
          valueInput={valueInput}
          setItemInput={setItemInput}
          sneakers={sneakers}
          favoriteCart={favoriteCart}
          setToCard={setToCard}
        />
      </Route>
    </div>
  );
}

export default App;
