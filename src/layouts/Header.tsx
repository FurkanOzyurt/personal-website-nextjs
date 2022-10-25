import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { ArrowDown, CaretDown, List, X } from "phosphor-react";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = (props) => {
  const { t, i18n } = useTranslation("common");

  const router = useRouter();
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);
  const [languages, setLanguages] = useState([]);
  const openMenu = () => {
    setMobileMenuVisibility(true);
  };
  useEffect(() => {
    const options: any = i18n.options;
    setLanguages(options.locales);
  }, [i18n.options]);
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
            <List size={20} weight="bold" />
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
                  <X size={25} weight="bold" />
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
              <div className="lg:px-5 dropdown-container">
                <button>
                  {i18n.language}
                  <CaretDown size={14} weight="bold" />
                </button>
                <div className="dropdown">
                  {languages?.map((item: string, key: number) => {
                    return (
                      <div
                        key={key}
                        className={`dropdown-item ${
                          i18n.language === item && "active"
                        }`}
                      >
                        <Link href={router.pathname} locale={item}>
                          <a>{item}</a>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <button className="fo-button lg:ml-5 lgx:mt-4">
                {t("downloadCV")} <ArrowDown size={16} weight="bold" />
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
