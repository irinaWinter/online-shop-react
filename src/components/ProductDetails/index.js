import React, { Component } from "react";
import Portal from "../Portal";
import "./index.scss";

export default class ProductDetails extends Component {
  render () {
    const {
      details,
      closeProductDetails
    } = this.props;

    return (
      <>
        {details && (
          <Portal>
            <div className="modal-overlay">
              <div className="modal">
                <button className="modal__close" onClick={closeProductDetails}>Закрыть</button>
                <img className="modal__img" src={details.img} alt={details.name} />
                <div className="modal__text-box">
                  <h2 className="modal__title">{details.name}</h2>
                  <p className="modal__rating">Рейтинг:&nbsp;
                    {(details.rating.reduce((a, b) => a + b) / details.rating.length).toFixed(1)}
                  </p>
                  <p className="modal__price">{details.price}&nbsp;₽</p>
                  <p>Здесь будет детальное описание</p>
                </div>
              </div>
            </div>
          </Portal>
        )}
      </>
    );
  }
};
