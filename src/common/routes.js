import React from "react";

const HomeHosting = React.lazy(() => import("../Pages/HomeHosting"));
const NotFound = React.lazy(() => import("../Pages/404"));
const PickTB = React.lazy(() => import("../Pages/PickTB"));

export const HOME = { component: HomeHosting, pageName: "HOME", path: "/" };
export const PICK_TB = {
  component: PickTB,
  pageName: "PICK_TB",
  path: "/pick_tb",
};

export function getPathByPageName(pageName) {
  switch (pageName) {
    case PICK_TB.pageName:
      return PICK_TB.path;
    default:
      return HOME.path;
  }
}
