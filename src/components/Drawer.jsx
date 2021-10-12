import React from "react";

function Drawer({ onClickClose, sneakers, itogo, removeCart }) {
  return (
    <div className="overlay">
      <div className="drawer">
        {/*верхний блок корзины название и кнопка закрытия*/}
        <h2 className="d-flex justify-between mb-30  ">
          Корзина{" "}
          <img
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="remove"
            onClick={onClickClose}
          />
        </h2>
        {sneakers.length > 0 ? (
          <div>
            <div className="items">
              {sneakers.map((items, index) => (
                <div key={index} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${items.img})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{items.name}</p>
                    <b>{items.price} руб.</b>
                  </div>
                  <img
                    onClick={() => removeCart(items.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{itogo} руб.</b>
                </li>
                <li>
                  <span>Налог 5%</span>
                  <div></div>
                  <b>1074 р.</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ
                <img src="img/arrow.svg" alt="Arrow" />
              </button>
            </div>{" "}
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              src="/img/empty-cart.jpg"
              alt="Empty"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>

            <button className="greenButton" onClick={onClickClose}>
              <img src="img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}

        {/*нижний блок корзины */}
      </div>
    </div>
  );
}

export default Drawer;
