import React from "react";
import styles from "./Card.module.scss";

function Card({ name, price, img }) {
  const onClickBtn = () => {
    alert(price);
  };
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.favorite}>
          <img src="/img/heart.svg" alt="Unliked" />
        </div>

        <img width={133} heigth={112} src={img} alt="Sneakers" />
        <h5>{name}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span> Цена:</span>
            <b> {`${price} руб.`}</b>
          </div>
          <button className="button" onClick={onClickBtn}>
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
