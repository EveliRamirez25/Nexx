import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import CoveragesSection from "./components/CoveragesSection";
import LeadForm from "./components/LeadForm";
import ServicesSection from "./components/ServicesSection";
import CtaMapSection from "./components/CtaMapSection";
import AboutSection from "./components/AboutSection";
import BrandsCarousel from "./components/BrandsCarousel";

export default function App() {
  const { t } = useTranslation();

  const scrollToCoverages = () => {
    const el = document.getElementById("coverages");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <main className="app-main">
        {/* HERO (layout de indes.html + i18n) */}
        <section id="home" className="hero">
          <div className="hero-overlay"></div>

          <div className="container hero-inner">
            <div className="hero-grid">
              {/* IZQUIERDA */}
              <div className="hero-text">
                <div className="hero-logo">
                  <img src="/NexxIn.png" alt="NexxInsurance logo" />
                </div>

                <p className="hero-kicker">{t("hero.kicker")}</p>
                <h1 className="hero-title">{t("hero.title")}</h1>
                <p className="hero-subtitle">{t("hero.description")}</p>

                <button className="hero-cta" onClick={scrollToCoverages}>
                  <span>{t("hero.cta")}</span>
                  <span className="hero-cta-icon">➜</span>
                </button>
              </div>

              {/* DERECHA (tarjeta) */}
              <aside className="hero-card">
                <p className="hero-card-title">{t("hero.card.title")}</p>

                <p className="hero-card-main">{t("hero.card.main")}</p>

                <ul className="hero-card-steps">
                  <li>
                    <span className="hero-dot"></span>
                    {t("hero.card.step1")}
                  </li>
                  <li>
                    <span className="hero-dot"></span>
                    {t("hero.card.step2")}
                  </li>
                  <li>
                    <span className="hero-dot"></span>
                    {t("hero.card.step3")}
                  </li>
                </ul>

                <p className="hero-card-note">{t("hero.card.note")}</p>

                {/* ✅ AVISO “50 estados + bilingüe” (en i18n) */}
                <p className="hero-card-badges">
                  <span className="hero-card-badge">
                    {t("hero.card.badges.coverage50")}
                  </span>
                  <span className="hero-card-badge">
                    {t("hero.card.badges.bilingual")}
                  </span>
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <AboutSection />

        {/* COVERAGES + SERVICES + FORM */}
        <section id="coverages">
          <div className="coverages-strip">
            <div className="container">
              <CoveragesSection />
            </div>
          </div>

          <div className="container">
            <ServicesSection />
            <BrandsCarousel />
          </div>

          <section id="contact" className="leadform-shell">
            <div className="container">
              <LeadForm />
            </div>
          </section>
        </section>

        <CtaMapSection />
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Nexx Insurance. Todos los derechos
          reservados.
        </p>
      </footer>
    </>
  );
}
