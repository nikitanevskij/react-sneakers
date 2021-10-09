import React from "react";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [sneakers, setSneakers] = React.useState([]);
  const [cardSneakers, setCardSneakers] = React.useState([]);
  const [closeDrawer, setCloseDrawer] = React.useState(false);

  React.useEffect(() => {
    fetch("https://6161517ee46acd001777c003.mockapi.io/items")
      .then((res) => res.json())
      .then((items) => setSneakers(items));
  }, []);

  const setToCard = (obj) => {
    setCardSneakers((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {closeDrawer && (
        <Drawer
          onClickClose={() => setCloseDrawer(false)}
          sneakers={cardSneakers}
        />
      )}
      <Header onClickClose={() => setCloseDrawer(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>

          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {sneakers.map((obj, index) => (
            <Card
              key={`${index} ${obj.price}`}
              name={obj.title}
              price={obj.price}
              img={obj.imgURL}
              onPlus={(item) => setToCard(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
