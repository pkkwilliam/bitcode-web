import React from "react";
import Reveal from "react-reveal/Reveal";
import ApplicationComponent from "../../../common/applicationComponent";
import { getPathByPageName } from "../../../common/routes";

class ProductWidget extends ApplicationComponent {
  render() {
    const { product } = this.label.footer;
    return (
      <Reveal effect="fadeInUp" duration={1200}>
        <div className="col-lg-3 col-md-6">
          <div
            className="f_widget about-widget pl_70 wow fadeInLeft"
            data-wow-delay="0.4s"
          >
            <h3 className="f-title f_600 t_color f_size_18 mb_40">
              {product.title}
            </h3>
            <ul className="list-unstyled f_list">
              {generateItems(product.products)}
            </ul>
          </div>
        </div>
      </Reveal>
    );
  }
}

export function generateItems(items) {
  return items.map((item, index) => {
    return (
      <li key={index}>
        <a href={getPathByPageName(item.pageName)}>{item.text}</a>
      </li>
    );
  });
}

export default ProductWidget;
