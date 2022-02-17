import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Breadcrumb from "../components/Breadcrumb";
import PickTB from "../components/Product/PickTB";
import FooterTwo from "../components/Footer/FooterTwo";
import ApplicationComponent from "../common/applicationComponent";

class PickTBPage extends ApplicationComponent {
  render() {
    const { pickTBPage } = this.label;
    return (
      <div className="body_wrapper">
        <CustomNavbar
          slogo="sticky_logo"
          mClass="menu_four"
          nClass="w_menu ml-auto mr-auto"
        />
        <Breadcrumb
          breadcrumbClass="breadcrumb_area"
          imgName="breadcrumb/banner_bg.png"
          Ptitle={pickTBPage.title}
          Pdescription={pickTBPage.description}
        />
        <PickTB />
        <FooterTwo />
      </div>
    );
  }
}

export default PickTBPage;
