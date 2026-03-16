import { useTranslation } from "react-i18next";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.455087362744!2d-80.19362!3d25.76168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ1JzQyLjAiTiA4MMKwMTEnMzcuMCJX!5e0!3m2!1sen!2sus!4v1234567890";

export default function CtaMapSection() {
  const { t } = useTranslation();

  return (
    <section id="ubicacion" className="cta-map-section fade-in">
      <div className="container cta-map">
        <div className="cta-map__content">
          <h2 className="cta-map__title">{t("ctaMap.title")}</h2>
          <p className="cta-map__text">{t("ctaMap.text")}</p>
        </div>

        <div className="cta-map__map">
          <iframe
            src={MAP_EMBED_URL}
            title="NexxInsurance Map"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
