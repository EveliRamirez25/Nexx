// src/components/ServicesSection.tsx
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

// ICONOS (tabs) – desde /assets/icons
import autoIcon from "../assets/icons/1.svg";
import homeIcon from "../assets/icons/3.svg";
import floodIcon from "../assets/icons/4.svg";
import businessIcon from "../assets/icons/6.svg";
import boatIcon from "../assets/icons/8.svg";
import rentersIcon from "../assets/icons/9.svg";
import petIcon from "../assets/icons/10.svg";

// IMÁGENES GRANDES (lado derecho)
import autoHero from "../assets/services/Auto-img.png";
import homeHero from "../assets/services/propiedad.png";
import floodHero from "../assets/services/huracan.png";
import businessHero from "../assets/services/comercial.png";
import boatHero from "../assets/services/bote.png";
import rentersHero from "../assets/services/inquilinos.png";
import petHero from "../assets/services/mascotas.png";

type ServiceKey =
  | "auto"
  | "home"
  | "flood"
  | "business"
  | "boat"
  | "renters"
  | "pet";

type ServiceConfig = {
  key: ServiceKey;
  labelKey: string;
  titleKey: string;
  textKey: string;
  icon: string; // icono pequeño para la tab
  heroImage: string; // PNG grande para el lado derecho
};

const SERVICES: ServiceConfig[] = [
  {
    key: "auto",
    labelKey: "services.auto.label",
    titleKey: "services.auto.title",
    textKey: "services.auto.text",
    icon: autoIcon,
    heroImage: autoHero,
  },
  {
    key: "home",
    labelKey: "services.home.label",
    titleKey: "services.home.title",
    textKey: "services.home.text",
    icon: homeIcon,
    heroImage: homeHero,
  },
  {
    key: "flood",
    labelKey: "services.flood.label",
    titleKey: "services.flood.title",
    textKey: "services.flood.text",
    icon: floodIcon,
    heroImage: floodHero,
  },
  {
    key: "business",
    labelKey: "services.business.label",
    titleKey: "services.business.title",
    textKey: "services.business.text",
    icon: businessIcon,
    heroImage: businessHero,
  },
  {
    key: "boat",
    labelKey: "services.boat.label",
    titleKey: "services.boat.title",
    textKey: "services.boat.text",
    icon: boatIcon,
    heroImage: boatHero,
  },
  {
    key: "renters",
    labelKey: "services.renters.label",
    titleKey: "services.renters.title",
    textKey: "services.renters.text",
    icon: rentersIcon,
    heroImage: rentersHero,
  },
  {
    key: "pet",
    labelKey: "services.pet.label",
    titleKey: "services.pet.title",
    textKey: "services.pet.text",
    icon: petIcon,
    heroImage: petHero,
  },
];

type BoatOptionKey = "charter" | "personal";

export default function ServicesSection() {
  const { t } = useTranslation();
  const [active, setActive] = useState<ServiceKey>("auto");

  const current = useMemo(
    () => SERVICES.find((s) => s.key === active)!,
    [active]
  );

  const isBoat = current.key === "boat";

  // Links (según hoja "Links sitio web NexxInsurance.xlsx")
  // Nota: algunos links venían copiados desde un iframe (con basura al final). Aquí se limpian.
  const sanitizeUrl = (url: string) =>
    url
      .trim()
      .replace(/%22$/i, "")
      .replace(/"$/i, "")
      .replace(/%3E%3C\/iframe%3E$/i, "")
      .replace(/><\/iframe>$/i, "");

  const SERVICE_URLS: Record<Exclude<ServiceKey, "boat">, string> = {
    auto: sanitizeUrl("https://form.jotform.com/260204006029139"),
    home: sanitizeUrl("https://form.jotform.com/260204402908145"),
    renters: sanitizeUrl(
      "https://embedd.staging.kanguroseguro.com/renters/pricing/one?true&utm_campaign=sum_joanna_caballero&embedded_payment=true&hide_kanguro_link_out=false%3E%3C/iframe%3E"
    ),
    pet: sanitizeUrl(
      "https://embedd.staging.kanguroseguro.com/widget/pricing/one?true&utm_campaign=sum_joanna_caballero&primary=nice&roundness=0.5rem&embedded_payment=true&hide_kanguro_link_out=false&enable_multi_pet=true&enable_customization=true%3E%3C/iframe%3E"
    ),
    flood: sanitizeUrl(
      "https://widget.rocketmga.com/iframe/eyJpdiI6IkNoK0hJaWM5aEZsOVNFTzIyTTFKSnc9PSIsInZhbHVlIjoialZVRVptQnpobHFYd011R3ErZi9yZXJ6NTJKZTJQL1ZxVFEvc3dNNThNdW9rSzlnY3luWG45bmhrVkQxKzFTSklZZ3FlL3ljTm5nZDhmRGFtL0ZxNFdoNFZla010UzZDRS9jMUk2aGNSSVU9IiwibWFjIjoiYWEyOTVlZWU0ZjY3MzVjM2I5ZDcxYmFlMWVjMGI2MjUzNjgwMjdhYWNhNTgzNWRkZjRjY2QwMjUwZmZmYjc2OSIsInRhZyI6IiJ9/quote"
    ),
    business: sanitizeUrl(
      "https://app.thimble.com/home?brokerid=FKKCGT5U9&widget_source=embed%22"
    ),
  };

  const BOAT_URLS: Record<BoatOptionKey, string> = {
    charter: sanitizeUrl("https://form.jotform.com/260204510863145"),
    personal: sanitizeUrl(
      "https://form.jotform.com/Joanna_Caballero/nexx-boat-insurance-quotation-form"
    ),
  };

  const openUrl = (url: string) => {
    const clean = sanitizeUrl(url);
    if (!clean) return;
    window.open(clean, "_blank", "noopener,noreferrer");
  };

  const handleServiceCta = (serviceKey: ServiceKey) => {
    if (serviceKey === "boat") return;
    openUrl(SERVICE_URLS[serviceKey]);
  };

  const handleBoatCta = (opt: BoatOptionKey) => {
    openUrl(BOAT_URLS[opt]);
  };

  return (
    <section className="services-section" id="seguros">
      <h2 className="services-heading">{t("services.heading")}</h2>

      <div className="services-layout">
        {/* --------- TABS --------- */}
        <div className="services-tabs">
          {SERVICES.map((service) => {
            const isActive = service.key === active;

            return (
              <button
                key={service.key}
                type="button"
                className={`services-tab ${
                  isActive ? "services-tab--active" : ""
                }`}
                onClick={() => setActive(service.key)}
              >
                <img
                  src={service.icon}
                  alt={t(service.labelKey)}
                  className="services-tab__icon"
                />
                <span className="services-tab__label">{t(service.labelKey)}</span>
                {isActive && <span className="services-tab__arrow" />}
              </button>
            );
          })}
        </div>

        <div className="services-divider" />

        {/* --------- DETALLE --------- */}
        <div className="services-detail">
          <div className="services-detail__content" key={current.key}>
            {!isBoat ? (
              <>
                {/* Layout normal (como ya lo tenías) */}
                <div className="services-detail__textblock">
                  <div className="services-detail__header">
                    <h3 className="services-detail__title">
                      {t(current.titleKey)}
                    </h3>
                    <p className="services-detail__text">{t(current.textKey)}</p>
                  </div>

                  <button
                    className="primary-btn services-detail__cta"
                    type="button"
                    onClick={() => handleServiceCta(current.key)}
                  >
                    {t("services.cta")}
                  </button>
                </div>

                <div className="services-detail__image-wrapper">
                  <img
                    src={current.heroImage}
                    alt={t(current.labelKey)}
                    className="services-detail__hero-image"
                  />
                </div>
              </>
            ) : (
              <>
                {/* ✅ BOAT especial: 3 columnas (texto + imagen + texto) */}
                <div className="services-detail__textblock services-detail__textblock--full">
                  <div className="services-detail__header">
                    <h3 className="services-detail__title">
                      {t(current.titleKey)}
                    </h3>
                    {/* (Opcional) texto general arriba de las 2 opciones */}
                    <p className="services-detail__text">{t(current.textKey)}</p>
                  </div>

                  <div className="services-boat-3col">
                    {/* IZQUIERDA – CHARTER */}
                    <div className="services-boat-side services-boat-side--left">
                      <h4 className="services-boat-title">
                        {t("services.boat.options.charter.title")}
                      </h4>
                      <p className="services-boat-text">
                        {t("services.boat.options.charter.text")}
                      </p>
                      <button
                        type="button"
                        className="primary-btn services-boat-btn"
                        onClick={() => handleBoatCta("charter")}
                      >
                        {t("services.boat.options.charter.cta")}
                      </button>
                    </div>

                    {/* CENTRO – IMAGEN */}
                    <div className="services-boat-center">
                      <img
                        src={current.heroImage}
                        alt={t(current.labelKey)}
                        className="services-boat-image"
                      />
                    </div>

                    {/* DERECHA – PERSONAL */}
                    <div className="services-boat-side services-boat-side--right">
                      <h4 className="services-boat-title">
                        {t("services.boat.options.personal.title")}
                      </h4>
                      <p className="services-boat-text">
                        {t("services.boat.options.personal.text")}
                      </p>
                      <button
                        type="button"
                        className="primary-btn services-boat-btn"
                        onClick={() => handleBoatCta("personal")}
                      >
                        {t("services.boat.options.personal.cta")}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
