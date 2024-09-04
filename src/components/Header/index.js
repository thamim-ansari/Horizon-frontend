import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  MdLanguage,
  MdOutlineKeyboardArrowDown,
  MdMenu,
  MdClose,
} from "react-icons/md";
import LanguageContext from "../../context/LanguageContext";

import "./index.css";

// Define language options
const languageOptions = [
  { id: 1, value: "EN", language: "English" },
  { id: 2, value: "FR", language: "Français (French)" },
  { id: 3, value: "GR", language: "Deutsch (German)" },
  { id: 4, value: "RU", language: "Русский (Russian)" },
  { id: 5, value: "SP", language: "Espagnol (Spanish)" },
  { id: 6, value: "CH", language: "中國人 (Chinese)" },
];

// Define translations for each language
const translations = {
  EN: {
    home: "Home",
    movies: "Movies",
    tvShows: "TV Shows",
    sports: "Sports",
    live: "Live",
  },
  FR: {
    home: "Accueil",
    movies: "Films",
    tvShows: "Émissions de télévision",
    sports: "Sportif",
    live: "En direct",
  },
  GR: {
    home: "Heim",
    movies: "Filme",
    tvShows: "Fernsehsendungen",
    sports: "Sport",
    live: "Live",
  },
  RU: {
    home: "дом",
    movies: "фильмы",
    tvShows: "ТВ-шоу",
    sports: "спорт",
    live: "жить",
  },
  SP: {
    home: "Hogar",
    movies: "Cine",
    tvShows: "Programas de televisión",
    sports: "Deportes",
    live: "Vivir",
  },
  CH: {
    home: "家",
    movies: "電影",
    tvShows: "電視節目",
    sports: "運動的",
    live: "居住",
  },
};

export default function Header() {
  const { activeLanguage, changeLanguage } = useContext(LanguageContext);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  // Find the currently active language option
  const activeSelect = languageOptions.find(
    (eachLang) => eachLang.value === activeLanguage
  );

  // Get the translations for the active language
  const transulatedMenu = translations[activeLanguage];

  // Toggle language dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  // Change language and close the dropdown
  const onClickChangeLanguage = (lang) => {
    changeLanguage(lang);
    toggleDropdown(false);
  };

  // Hide mobile menu on item click
  const handleMenuItemClick = () => {
    setMenuVisible(false);
  };

  // Render logo container
  const renderLogoContainer = () => (
    <div className="nav-logo-container">
      <img
        src="https://companieslogo.com/img/orig/HZNP_BIG.D-b4815c4c.png?t=1720244492"
        alt="app-logo-image"
        className="nav-app-logo-image"
      />
    </div>
  );

  // Render desktop navigation menu
  const renderDesktopNav = () => (
    <ul className="desktop-nav-menu-list">
      <Link to="/" className="link-style">
        <li>{transulatedMenu.home}</li>
      </Link>
      <Link to="/movies" className="link-style">
        <li>{transulatedMenu.movies}</li>
      </Link>
      <Link to="/tv-shows" className="link-style">
        <li>{transulatedMenu.tvShows}</li>
      </Link>
      <Link to="/sports" className="link-style">
        <li>{transulatedMenu.sports}</li>
      </Link>
      <Link to="/live" className="link-style">
        <li>{transulatedMenu.live}</li>
      </Link>
    </ul>
  );

  // Render language selection button
  const renderLanguageOptionBtn = () => (
    <button
      type="button"
      className="Language-option-btn"
      onClick={toggleDropdown}
    >
      <MdLanguage />
      <span>{activeSelect.language}</span>
      <MdOutlineKeyboardArrowDown />
    </button>
  );

  // Render language options dropdown
  const renderLanguageOptions = () => (
    <ul className="select-language-container">
      {languageOptions.map((eachLang) => (
        <li key={eachLang.id}>
          <button onClick={() => onClickChangeLanguage(eachLang.value)}>
            {eachLang.language}
          </button>
        </li>
      ))}
    </ul>
  );

  // Render mobile menu button
  const renderMobileMenuBtn = () => (
    <button type="button" onClick={toggleMenu} className="menu-btn">
      {isMenuVisible ? <MdClose /> : <MdMenu />}
    </button>
  );

  // Render mobile navigation menu
  const renderMobileNav = () => (
    <ul className={`mobile-nav-menu-list ${isMenuVisible ? "show" : ""}`}>
      <Link to="/" className="link-style" onClick={handleMenuItemClick}>
        <li>{transulatedMenu.home}</li>
      </Link>
      <Link to="/movies" className="link-style" onClick={handleMenuItemClick}>
        <li>{transulatedMenu.movies}</li>
      </Link>
      <Link to="/tv-shows" className="link-style" onClick={handleMenuItemClick}>
        <li>{transulatedMenu.tvShows}</li>
      </Link>
      <Link to="/sports" className="link-style" onClick={handleMenuItemClick}>
        <li>{transulatedMenu.sports}</li>
      </Link>
      <Link to="/live" className="link-style" onClick={handleMenuItemClick}>
        <li>{transulatedMenu.live}</li>
      </Link>
    </ul>
  );

  return (
    <nav className="nav-container">
      <Link to="/">{renderLogoContainer()}</Link>
      {renderDesktopNav()}
      <div className="mobile-nav-and-language-container">
        <div className="mobile-nav-and-lang-btn">
          <div className="language-selection-container">
            {renderLanguageOptionBtn()}
            {isDropdownVisible && renderLanguageOptions()}
          </div>
          {renderMobileMenuBtn()}
        </div>
        {renderMobileNav()}
      </div>
    </nav>
  );
}
