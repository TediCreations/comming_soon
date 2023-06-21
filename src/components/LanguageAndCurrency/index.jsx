import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

class LanguageAndCurrency extends React.Component {
  constructor() {
    super();
    this.state = {
      isEnabled: false,
      languages: ["Greek", "English"],
      selectedLanguage: "Greek",
      currencies: ["EUR", "USD"],
      selectedCurrency: "EUR",
    };
  }

  selectLanguage(event, language) {
    this.setState({ selectedLanguage: language });
  }

  selectCurrency(event, currency) {
    this.setState({ selectedCurrency: currency });
  }

  render() {
    var content = "";

    const listLanguages = this.state.languages.map((language) => (
      <li
        key={language.id}
        onClick={(event) => this.selectLanguage(event, language)}
      >
        <a href="/#">{language}</a>
      </li>
    ));

    const listCurrencies = this.state.currencies.map((currency) => (
      <li
        key={currency.id}
        onClick={(event) => this.selectCurrency(event, currency)}
      >
        <a href="/#">{currency}</a>
      </li>
    ));

    if (this.state.isEnabled) {
      content = (
        <React.Fragment>
          <ul className="header-lan-curr">
            <li>
              <a href="/#">
                {this.state.selectedLanguage}
                <FontAwesomeIcon icon={faAngleDown} />
              </a>
              <ul className="curr-lan-sub-menu">{listLanguages}</ul>
            </li>
            <li>
              <a href="/#">
                {this.state.selectedCurrency}
                <FontAwesomeIcon icon={faAngleDown} />
              </a>
              <ul className="curr-lan-sub-menu">{listCurrencies}</ul>
            </li>
          </ul>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        {/* Header Language & Currency Start */}
        <div className="col">{content}</div>
        {/* Header Language & Currency End */}
      </React.Fragment>
    );
  }
}

export default LanguageAndCurrency;
