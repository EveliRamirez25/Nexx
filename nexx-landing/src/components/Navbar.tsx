// src/components/Navbar.tsx
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/NexxIn.png";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentLang = i18n.language.startsWith("es") ? "es" : "en";

  const NAV_ITEMS = useMemo(
    () => [
      { id: "home", labelKey: "nav.home" },
      { id: "about", labelKey: "nav.about" },
      { id: "coverages", labelKey: "nav.coverages" },
      { id: "contact", labelKey: "nav.contact" },
      { id: "location", labelKey: "nav.location" },
    ],
    []
  );

  const handleChangeLanguage = () => {
    const next = currentLang === "es" ? "en" : "es";
    i18n.changeLanguage(next);
  };

  const scrollToSection = (id: string) => {
    setMobileOpen(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`navbar ${mobileOpen ? "navbar--mobile-open" : ""}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <button
          className="navbar-logo-btn"
          onClick={() => scrollToSection("home")}
          aria-label={t("nav.ariaHome")}
        >
          <img src={logo} alt="Nexx Insurance" className="logo" />
        </button>

        {/* Links desktop */}
        <nav className="nav-center" aria-label={t("nav.ariaMain")}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              type="button"
              onClick={() => scrollToSection(item.id)}
            >
              {t(item.labelKey)}
            </button>
          ))}
        </nav>

        {/* Controles derecha */}
        <div className="nav-right">
          <button
            type="button"
            className="pill-btn"
            onClick={handleChangeLanguage}
          >
            {t("nav.langToggle")}
          </button>

          {/* Hamburguesa mobile */}
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? t("nav.ariaCloseMenu") : t("nav.ariaOpenMenu")}
          >
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div className="mobile-menu">
        <nav className="mobile-nav-links" aria-label={t("nav.ariaMobile")}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className="mobile-nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {t(item.labelKey)}
            </button>
          ))}
        </nav>

        <div className="mobile-nav-footer">
          <button
            type="button"
            className="pill-btn pill-btn--mobile"
            onClick={handleChangeLanguage}
          >
            {t("nav.langToggle")}
          </button>
        </div>
      </div>
    </header>
  );
}
