import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Breadcrumb from "../components/Breadcrumb";
import Phoenix from "../components/Product/Phoenix";
import FooterTwo from "../components/Footer/FooterTwo";
import ApplicationComponent from "../common/applicationComponent";

class PickTBPage extends ApplicationComponent {
  render() {
    const { phoenixPage } = this.label;
    return (
      <div className="body_wrapper">
        <CustomNavbar
          slogo="sticky_logo"
          showLogo={true}
          mClass="menu_four"
          nClass="w_menu ml-auto mr-auto"
        />
        <Breadcrumb
          breadcrumbClass="breadcrumb_area_three"
          imgName="phoenix/header.png"
        />
        <Phoenix />
        <FooterTwo />
      </div>
    );
  }
}

export default PickTBPage;
