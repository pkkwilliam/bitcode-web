import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import Sectitle from "../Title/Sectitle";
import HRServiceItems from "./HostingServiceitem";

class HostingService extends ApplicationComponent {
  render() {
    const { advantage } = this.label.landingPage;
    const HRServiceItemsList = advantage.advantages.map((advantage) =>
      this.generateHRServiceItems({ ...advantage })
    );

    return (
      <section className="hosting_service_area sec_pad">
        <div className="container">
          <Sectitle
            sClass="hosting_title text-center"
            Title={advantage.title}
          />
          <div className="row">{HRServiceItemsList}</div>
        </div>
      </section>
    );
  }

  generateHRServiceItems({ title, icon, description }) {
    return (
      <HRServiceItems
        hostingicon={icon}
        hostingserviceTitle={title}
        hostingservicedescription={description}
      />
    );
  }
}

export default HostingService;
