import React, { Component } from "react";

class HostingActionTwo extends Component {
  render() {
    return (
      <section className="h_action_promo_area">
        <div
          className="overlay_bg"
          style={{
            backgroundImage:
              "url(" + require("../img/hosting/hosting_action_bg.png") + ")",
          }}
        ></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="h_promo_content">
                <h2>體驗全新企業服務</h2>
                <p>用創想與技術推動商業和社會進步</p>
              </div>
            </div>
            <div className="col-md-4 text-right">
              <a href="/#" className="hosting_btn btn_hover">
                免費諮詢
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default HostingActionTwo;
