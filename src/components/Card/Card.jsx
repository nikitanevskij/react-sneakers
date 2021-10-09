import React from "react";
import styles from "./Card.module.scss";

function Card({ name, price, img, onPlus }) {
  const [status, setStatus] = React.useState(false);

  const setBtnPls = () => {
    onPlus({ name, price, img });
    setStatus(!status);
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

          <img
            className={styles.btnPlus}
            src={status ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
            alt="plus"
            onClick={setBtnPls}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
