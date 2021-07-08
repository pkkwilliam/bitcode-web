import React from "react";
import HostingFeaturesItem from "./HostingFeaturesItem";

const HostingFeaturesTwo = () => {
  return (
    <section className="hosting_features_area">
      <div className="container">
        <HostingFeaturesItem
          rowClass="flex-row-reverse"
          hImage="business2.png"
          hTitle="全新商業智慧"
          hPragraph="與客戶共同開發，利用新技術定製全新的解決方案及移動應用程序等"
          icon="icon9.png"
          icon2="icon10.png"
          text="集中管控"
          text2="多端融合"
          tdescription="為企業客戶提供多時區，多幣種，多語言，多業務的一體化管理系統服務"
          tdescription2="支持與第三方應用集成及共享，提升企業的集團管控能力，並增強競爭力"
        />
      </div>
    </section>
  );
};

export default HostingFeaturesTwo;
