import { TRADITIONAL_CHINESE } from "../common/language";

const LANGUAGE = "LANGUAGE";

export default class AppStorage {
  getLanguage() {
    return localStorage.getItem(LANGUAGE);
  }

  saveLanguage(language) {
    localStorage.setItem(LANGUAGE, language);
  }
}
