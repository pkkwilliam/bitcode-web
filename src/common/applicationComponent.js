import { Component } from "react";
import { BitCodeWebContext } from "../appState/contextProvider";
import { TRADITIONAL_CHINESE } from "./language";
import AppStorage from "../appStorage/appStorage";
import traditional_chinese_label from "../label/traditional_chinese_label.json";

class ApplicationComponent extends Component {
  static contextType = BitCodeWebContext;
  _appStorage = new AppStorage();

  get appState() {
    return this.context;
  }

  get appStorage() {
    return this._appStorage;
  }

  get label() {
    const languageType = this.appStorage.getLanguage();
    switch (languageType) {
      case TRADITIONAL_CHINESE:
        return traditional_chinese_label;
      default:
        return traditional_chinese_label;
    }
  }
}

export default ApplicationComponent;
