import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import ApplicationComponent from "../../common/applicationComponent";
import ProductWidget from "./FooterWidget/ProductWidget";
class FooterTwo extends ApplicationComponent {
  render() {
    const { footer } = this.label;
    return (
      <footer className={`footer_area footer_area_four f_bg`}>
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <Reveal effect="fadeInUp">
                <div className="col-lg-5 col-md-6">
                  <div
                    className="f_widget company_widget wow fadeInLeft"
                    data-wow-delay="0.2s"
                  >
                    <a href="index.html" className="f-logo">
                      <h3>源代碼科技</h3>
                      <h3>Bitcode Technology</h3>
                    </a>
                    <div className="widget-wrap">
                      <CompanyInfo
                        title="地址"
                        value="澳門漁翁街188號永好工業大廈7樓F座"
                      />
                      <CompanyInfo title="郵箱" value="info@bitcode.mo" />
                      <CompanyInfo title="電話" value="+(853) 6353 0392" />
                    </div>
                  </div>
                </div>
              </Reveal>
              <ProductWidget />
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5 col-sm-6">
                <p className="mb-0 f_400">{footer.copyRight}</p>
              </div>
              <div className="col-lg-4 col-md-3 col-sm-6"></div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <ul className="list-unstyled f_menu text-right">
                  <li>
                    <a href=".#">Terms of Use</a>
                  </li>
                  <li>
                    <a href=".#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

function CompanyInfo({ title, value }) {
  return (
    <p className="f_400 f_p f_size_15 mb-0 l_height34">
      <span>{title}:</span>
      <a href={value} className="f_400">
        {value}
      </a>
    </p>
  );
}

export default FooterTwo;
