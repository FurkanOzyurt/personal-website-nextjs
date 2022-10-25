import { useTranslation } from "next-i18next";
import React, { FC, useState } from "react";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = (props) => {
  const { t } = useTranslation("common");
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);
  const openMenu = () => {
    setMobileMenuVisibility(true);
  };
  const closeMenu = () => {
    setMobileMenuVisibility(false);
  };
  return (
    <header className={`section-space ${mobileMenuVisibility && "active"}`}>
      <div className="fo-container flex items-center justify-between">
        <a href="index.html" className="name-title">
          {t("firstName")}
          <span>{t("lastName")}</span>
        </a>
        <div className="header-menu">
          <button type="button" onClick={openMenu} className="open-menu">
            <i className="ph-list-bold text-xl"></i>
          </button>
        </div>
        <div className="menu">
          <nav className="navigation-container">
            <div className="w-full lg:hidden flex justify-between fo-container">
              <a href="index.html" className="name-title p-2">
                {t("firstName")}
                <span>{t("lastName")}</span>
              </a>
              <div className="lg:hidden flex p-2">
                <button
                  type="button"
                  onClick={closeMenu}
                  className="close-menu"
                >
                  <i className="ph-x-bold text-[25px]"></i>
                </button>
              </div>
            </div>
            <div className="lg:flex lg:items-center">
              <ul className="lg:flex">
                <li className="active">
                  <a onClick={closeMenu} href="index.html">
                    {t("home")}
                  </a>
                </li>
                <li>
                  <a onClick={closeMenu} href="blog.html">
                    {t("blog")}
                  </a>
                </li>
                <li>
                  <a onClick={closeMenu} href="contact.html">
                    {t("contact")}
                  </a>
                </li>
              </ul>
              <button className="fo-button">
                {t("downloadCV")}{" "}
                <i className="ph-arrow-down-bold text-base"></i>
              </button>
            </div>
            <div className="w-full lg:hidden flex justify-center text-xs">
              {t("copyright")}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
