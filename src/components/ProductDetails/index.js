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
                <img className="modal__img" src={details.image} alt={details.title} />
                <div className="modal__text-box">
                  <h2 className="modal__title">{details.title}</h2>
                  <p className="modal__rating">Категория:&nbsp;
                    {details.category}
                  </p>
                  <p className="modal__price">{details.price}&nbsp;₽</p>
                  <p>{details.description}</p>
                </div>
              </div>
            </div>
          </Portal>
        )}
      </>
    );
  }
};
