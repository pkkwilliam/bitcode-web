import React from "react";
import { Link, NavLink } from "react-router-dom";
import Sticky from "react-stickynode";
import ApplicationComponent from "../common/applicationComponent";
import { getPathByPageName } from "../common/routes";

class CustomNavbar extends ApplicationComponent {
  render() {
    const { navigation } = this.label;
    const { product } = navigation;
    var { mClass, nClass, cClass, slogo, hbtnClass } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              <Link className={`navbar-brand ${slogo}`} to="/">
                {/* <img src={require("../img/logo2.png")} alt="" /> */}
                {/* <img src={require("../img/logo.png")} alt="logo" /> */}
                <h3>Bitcode</h3>
              </Link>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className="hamburger-cross">
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {product.title}
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <TabItems items={product.products} />
                    </ul>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {navigation.solution}
                    </Link>
                    <ul role="menu" className=" dropdown-menu"></ul>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      to="#"
                    >
                      {navigation.caseList}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <NavLink title="Pricing" className="nav-link" to="/career">
                      {navigation.careers}
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href=".#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {navigation.aboutUs}
                    </a>
                  </li>
                </ul>
                <a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app">
                  {navigation.freeConsulate}
                </a>
              </div>
            </div>
          </nav>
        </header>
      </Sticky>
    );
  }
}

function TabItems({ items }) {
  return items.map((item) => (
    <TabItem text={item.text} pageName={item.pageName} />
  ));
}

function TabItem({ text, pageName }) {
  return (
    <li className="nav-item">
      <NavLink
        exact
        title={text}
        className="nav-link"
        to={getPathByPageName(pageName)}
      >
        {text}
      </NavLink>
    </li>
  );
}

export default CustomNavbar;
