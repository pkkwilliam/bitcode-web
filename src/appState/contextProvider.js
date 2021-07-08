import React, { Component } from "react";
import { TRADITIONAL_CHINESE } from "../common/language";

export const BitCodeWebContext = React.createContext();

export default class BitCodeWebAppState extends Component {
  state = {
    language: {
      languageType: TRADITIONAL_CHINESE,
    },
  };

  AppStateWrapper = ({ children }) => {
    const { language } = this.state;
    return (
      <BitCodeWebContext.Provider
        value={{
          language: {
            ...language,
          },
        }}
      >
        {children}
      </BitCodeWebContext.Provider>
    );
  };

  setLanguage = (languageType) => {
    this.setState({
      language: {
        languageType,
      },
    });
  };
}
