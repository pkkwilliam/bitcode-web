import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import HostingBanner from "../components/Banner/HostingBanner";
import HostingService from "../components/Service/HostingService";
import HostingFeatures from "../components/Service/HostingFeatures";
import HostingFeaturesTwo from "../components/Service/HostingFeaturesTwo";
import HostingAction from "../components/HostingAction";
import HostingActionTwo from "../components/HostingActionTwo";
import FooterErp from "../components/Footer/FooterErp";
import FooterData from "../components/Footer/FooterData";
import ApplicationComponent from "../common/applicationComponent";

class HomeHosting extends ApplicationComponent {
  render() {
    return (
      <div className="body_wrapper">
        <CustomNavbar
          mClass="menu_four hosting_menu"
          nClass="w_menu"
          slogo="sticky_logo"
        />
        <HostingBanner />
        <HostingService />
        <HostingFeatures />
        <HostingFeaturesTwo />
        <HostingAction
          aClass="h_action_area"
          buttonText="了解更多"
          aimage="action_img.png"
          colClass="col-lg-6"
          colClassTwo="col-lg-6"
          Atitle="企業與公共組織軟件，雲服務，金融服務提供商"
          Atext="專注於企業管理軟件與服務領域，為亞太地區提供ERP軟件、集團管理軟件、人力資源管理軟件、財務會計管理軟件、供應鏈管理軟件、客戶關係管理軟件、辦公室自動化服務，支撐了亞太區眾多不同規模企業的信息化建設，推動了企業的管理進步。現在，源代碼亦為企業提供雲計算、平台、應用、數據、業務、知識、信息服務多態融合的2.0版智能化企業雲服務，致力於推動企業和公共組織互聯網化、金融化創新發展，服務企業IT產業轉型升級。"
        />

        <HostingActionTwo />
        {/* <FooterErp FooterData={FooterData} /> */}
      </div>
    );
  }
}

export default HomeHosting;
