import React from "react";
import styles from "./Card.module.scss";

function Card({ id, name, price, img, onPlus, onFavorite, favorited = false }) {
  const [status, setStatus] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ name, price, img });
    setStatus(!status);
  };
  const onClickFavorite = () => {
    onFavorite({ id, name, price, img });
    setIsFavorite(!isFavorite);
  };
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.favorite}>
          <img
            onClick={onClickFavorite}
            src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
            alt="Unliked"
          />
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
            onClick={onClickPlus}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
