import React from "react";

import "./index.scss";

const NoResults = ({ request }) => {
  return (
    <div className="no-results">
      <p className="no-results__text">
        Извините, по вашему запросу{" "}
        <span className="no-results__request">«{request}»</span> ничего не
        найдено
      </p>
      <p className="no-results__recommendation">
        Попробуйте поискать в{" "}
        <a className="no-results__link" href="#">
          «Каталоге»
        </a>
      </p>
      <a className="no-results__button" href="#">
        Перейти в каталог
      </a>
    </div>
  );
};

export default NoResults;
