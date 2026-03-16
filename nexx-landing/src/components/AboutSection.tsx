// src/components/AboutSection.tsx
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-text">
          <p className="about-kicker">{t("about.kicker")}</p>
          <h2 className="about-title">{t("about.title")}</h2>
          <p className="about-body">{t("about.body1")}</p>
          <p className="about-body">{t("about.body2")}</p>
        </div>

        <div className="about-highlight">
          <h3 className="about-highlight__title">
            {t("about.highlightTitle")}
          </h3>
          <ul className="about-highlight__list">
            <li>{t("about.point1")}</li>
            <li>{t("about.point2")}</li>
            <li>{t("about.point3")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
