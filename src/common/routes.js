import React from "react";

const HomeHosting = React.lazy(() => import("../Pages/HomeHosting"));
const Career = React.lazy(() => import("../Pages/HR-Management"));
const NotFound = React.lazy(() => import("../Pages/404"));
const Phoenix = React.lazy(() => import("../Pages/PhoenixPage"));
const PickTB = React.lazy(() => import("../Pages/PickTBPage"));

export const HOME = { component: HomeHosting, pageName: "HOME", path: "/" };
export const CAREER = {
  component: Career,
  pageName: "CAREER",
  path: "/career",
};
export const PHOENIX = {
  component: Phoenix,
  pageName: "PHOENIX",
  path: "/phoenix",
};
export const PICK_TB = {
  component: PickTB,
  pageName: "PICK_TB",
  path: "/pick_tb",
};

export function getPathByPageName(pageName) {
  switch (pageName) {
    case PICK_TB.pageName:
      return PICK_TB.path;
    case PHOENIX.pageName:
      return PHOENIX.path;
    default:
      return HOME.path;
  }
}
