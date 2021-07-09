import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import { Link } from "react-router-dom";
import FooterData from "./FooterData";

class FooterErp extends Component {
  render() {
    let { fClass } = this.props;
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
                        {/* <img src={require("../../img/logo2.png")} alt="" /> */}
                        <h3>源代碼科技</h3>
                        <h3>Bitcode Technology</h3>
                      </a>
                      <p>
                        © 2021 Bitcode Technology Ltd. All rights reserved.
                        Proudly made in Macau
                      </p>
                      <div className="f_social_icon">
                        {/* {FooterData.socialIcon.map((item) => {
                          return (
                            <a href="/" key={item.id}>
                              <i className={item.icon}></i>
                            </a>
                          );
                        })} */}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
            <Reveal effect="fadeInLeft" duration={500}>
              <div className="col-lg-3 col-sm-6">
                <div className="f_widget dark_widget about-widget pl_70">
                  <h3 className="f-title f_500 t_color f_size_18 mb_40">
                    產品
                  </h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <Link>ERP</Link>
                    </li>
                    <li>
                      <Link>SCM</Link>
                    </li>
                    <li>
                      <Link>HCM</Link>
                    </li>
                    <li>
                      <Link>RMMS地產業務</Link>
                    </li>
                    <li>
                      <Link>澳提代收 | PickTB.com</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
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

            {/* {FooterData.AboutWidget.map((widget) => {
              return (
                <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                  <div className="col-lg-3 col-sm-6">
                    <div className="f_widget dark_widget about-widget pl_70">
                      <h3 className="f-title f_500 t_color f_size_18 mb_40">
                        {widget.title}
                      </h3>
                      <ul className="list-unstyled f_list">
                        {widget.menuItems.map((item) => {
                          return (
                            <li key={item.id}>
                              <Link to="/">{item.text}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
            {FooterData.termsCondition.map((widget) => {
              return (
                <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                  <div className="col-lg-2 col-sm-6">
                    <div className="f_widget dark_widget about-widget">
                      <h3 className="f-title f_500 t_color f_size_18 mb_40">
                        {widget.title}
                      </h3>
                      <ul className="list-unstyled f_list">
                        {widget.menuItems.map((item) => {
                          return (
                            <li key={item.id}>
                              <Link to="/">{item.text}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })} */}
          </div>
        </div>
      </footer>
    );
  }
}
export default FooterErp;
