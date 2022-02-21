import React from "react";

const ServiceDetails = () => {
  return (
    <section className="service_details_area sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 pr_70">
            <div className="job_info">
              <div className="info_head">
                <i className="ti-receipt"></i>
                <h6 className="f_p f_600 f_size_18 t_color3">產品特色</h6>
              </div>
              <div className="info_item">
                <h6>平台:</h6>
                <p>iOS, Android, 微信小程序, PC, Mac</p>
              </div>
              {/* <div className="info_item">
                <h6>Live Time:</h6>
                <p>2 Working Days</p>
              </div>
              <div className="info_item">
                <h6>Service Cost:</h6>
                <p>$250.00</p>
              </div>
              <div className="info_item">
                <h6>Quality:</h6>
                <p>High</p>
              </div>
              <div className="info_item">
                <h6>Experience</h6>
                <p>3 Years</p>
              </div> */}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="details_content">
              <div className="sec_title">
                <p className="f_400 f_size_15">
                  澳提代收管理系統是為香港及澳門專門開發的淘寶代收平台，其中包括手機應用，物流管理，貨物追蹤，難件處理，打印運單等等功能。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceDetails;
