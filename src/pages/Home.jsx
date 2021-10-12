import React from "react";
import Card from "../components/Card/Card";

function Home({
  itemInput,
  valueInput,
  setItemInput,
  sneakers,
  favoriteCart,
  setToCard,
}) {
  return (
    <div>
      {/*промежуточный блок с поиском*/}
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {itemInput ? `Поиск по запросу: "${itemInput}"` : "Все кроссовки"}
          </h1>
          {/*блок поиска*/}
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input
              onChange={valueInput}
              value={itemInput}
              placeholder="Поиск..."
            />
            {itemInput && (
              <img
                onClick={() => setItemInput("")}
                className="cu-p"
                src="/img/btn-remove.svg"
                alt="clear"
              />
            )}
          </div>
        </div>

        {/*основной блок карточек кроссовок на главной*/}
        <div className="d-flex flex-wrap">
          {sneakers
            .filter((item) =>
              item.title.toLowerCase().includes(itemInput.toLowerCase())
            )
            .map((obj, index) => (
              <Card
                key={`${index} ${obj.price}`}
                name={obj.title}
                price={obj.price}
                img={obj.imgURL}
                id={obj.id}
                onFavorite={(item) => favoriteCart(item)}
                onPlus={(item) => setToCard(item)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
