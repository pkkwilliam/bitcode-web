import React from "react";

const AppIcon = () => {
  const appIcons = [
    {
      href: "https://apps.apple.com/us/app/%E6%91%B8%E9%AD%9A/id1609338112",
      imageSrc:
        "https://github.com/pkkwilliam/github.io-contents/raw/master/oscm/assert/install_app/install_from_apk.png",
      type: "ANDROID",
    },
    {
      href: "https://apps.apple.com/us/app/%E6%91%B8%E9%AD%9A/id1609338112",
      imageSrc:
        "https://github.com/pkkwilliam/github.io-contents/raw/master/oscm/assert/install_app/apple_store.png",
      type: "IOS",
    },
  ];
  return appIcons.map((appIcon) => (
    <a href={appIcon.href}>
      <img
        alt={appIcon.name}
        className="medium-margin-bottom-spacer medium-margin-right-spacer "
        src={appIcon.imageSrc}
        style={styles.appIcon}
      />
    </a>
  ));
};

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
                <p>Android, iOS</p>
                <AppIcon />
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
                  摸魚閒置換物，買賣交易，來摸魚摸些好物！
                </p>
                <p className="f_400 f_size_15">
                  【以物換物】澳門唯一一個支持以物換物的閒置交易平台，僅需30秒即可發布物品，可選擇多個自己發布的物品與他人進行換物。
                </p>
                <p className="f_400 f_size_15">
                  【購買閒置】可直接購買他人發布的閒置物品，充值即可享受更多優惠！交易由摸魚平台擔保，保證買賣安全。
                </p>
                <p className="f_400 f_size_15">
                  【商城好物】澳門實力商家直接入駐摸魚平台，享受商家配送服務，體驗一站式購物，摸魚會對所有入駐商家進行資格審查。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  appIcon: {
    width: 150,
    marginRight: 10,
  },
  appIconContainer: {
    marginBotttom: 10,
  },
};

export default ServiceDetails;
