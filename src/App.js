import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12900,
    imgURL: "/img/sneakers/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12100,
    imgURL: "/img/sneakers/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12800,
    imgURL: "/img/sneakers/3.jpg",
  },
];
function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>

          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj, index) => (
            <Card
              key={`${index} ${obj.price}`}
              name={obj.title}
              price={obj.price}
              img={obj.imgURL}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
