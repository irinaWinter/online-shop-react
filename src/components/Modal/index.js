import React from "react";
import PropTypes from "prop-types";
import Portal from "../Portal";
import "./index.scss";

const Modal = ({ name, isOpen, onCancel }) => {
  return (
    <>
      {isOpen && (
        <Portal>
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal__header">
                <h2 className="modal__title">{name}</h2>
                <button onClick={onCancel}>Закрыть</button>
              </div>
              <div className="modal__body"></div>
              <div className="modal__footer"></div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

Modal.propTypes = {
  name: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
};

Modal.defaultProps = {
  name: "Modal title",
  isOpen: true,
  onCancel: () => {},
};

export default Modal;
