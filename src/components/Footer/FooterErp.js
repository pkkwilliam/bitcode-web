import React from "react";
import Reveal from "react-reveal/Reveal";
import { Link } from "react-router-dom";
import ApplicationComponent from "../../common/applicationComponent";
import { getPathByPageName } from "../../common/routes";
import FooterData from "./FooterData";

class FooterErp extends ApplicationComponent {
  render() {
    let { fClass } = this.props;
    const { footer } = this.label;
    return (
      <footer className={`footer_area h_footer_dark ${fClass}`}>
        <div className="container">
          <div className="row">
            {FooterData.CompanyWidget.map((widget) => {
              return (
                <Reveal effect="fadeInLeft" duration={500} key={1}>
                  <div className="col-lg-4 col-sm-6">
                    <div
                      className="f_widget dark_widget company_widget"
                      data-wow-delay="0.2s"
                    >
                      <a href="index.html" className="f-logo">
                        <h3>源代碼科技</h3>
                        <h3>Bitcode Technology</h3>
                      </a>
                      <p>{footer.copyRight}</p>
                      <a
                        href="https://beian.miit.gov.cn/"
                        style={{ color: "#7b7b93" }}
                        target="_blank"
                      >
                        {footer.chinaIcp}
                      </a>
                      <div className="f_social_icon"></div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
            {/* <Reveal effect="fadeInLeft" duration={500}>
              <div className="col-lg-3 col-sm-6">
                <div className="f_widget dark_widget about-widget pl_70">
                  <h3 className="f-title f_500 t_color f_size_18 mb_40">
                    產品
                  </h3>
                  <ul className="list-unstyled f_list">
                    {generateItems(footer.product.products)}
                  </ul>
                </div>
              </div>
            </Reveal> */}
            <Reveal effect="fadeInLeft" duration={500}>
              <div className="col-lg-5 col-sm-6">
                <div className="f_widget dark_widget about-widget pl_70">
                  <h3 className="f-title f_500 t_color f_size_18 mb_40">
                    聯繫我們
                  </h3>
                  <ul className="list-unstyled f_list">
                    <li>地址: 澳門漁翁街188號永好工業大廈7樓F座</li>
                    <li>電話: +(853) 6353 0392</li>
                    <li>郵箱: info@bitcode.mo</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </footer>
    );
  }
}

function generateItems(items) {
  return items.map((item) => (
    <li>
      <Link to={getPathByPageName(item.pageName)}>{item.text}</Link>
    </li>
  ));
}

export default FooterErp;
