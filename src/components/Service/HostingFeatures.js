import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import HostingFeaturesItem from "./HostingFeaturesItem";

class HostingFeatures extends ApplicationComponent {
  render() {
    return (
      <section className="hosting_features_area">
        <div className="container">
          <HostingFeaturesItem
            hImage="business1.png"
            hTitle="功能特色"
            hPragraph=""
            icon="icon7.png"
            icon2="icon8.png"
            text="可擴展性"
            text2="規範性"
            tdescription="靈活高效，能有效適應企業持續拓展的需求"
            tdescription2="合乎多個地區政府要求和條例規範; 與香港及內地稅務門戶對接"
          />
        </div>
      </section>
    );
  }
}

export default HostingFeatures;
