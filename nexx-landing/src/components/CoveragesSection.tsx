import CoverageCard from "./CoverageCard";
import { useTranslation } from "react-i18next";

import thimbleLogo from "../assets/logo_thimble.png";
import coterieLogo from "../assets/coterie.png";
import rocketLogo from "../assets/logo_thimble.png";

export default function CoveragesSection() {
  const { t } = useTranslation();

  return (
    <section className="coverages-section">
      <h2>{t("coverages.title")}</h2>

      <div className="coverages-list">
        <CoverageCard
          title={t("coverages.thimble")}
          subtitle={t("coverages.thimble_sub")}
          href="https://app.thimble.com/home?brokerid=FKKCGT5U9&widget_source=embed"
          logoSrc={thimbleLogo}
        />

        <CoverageCard
          title={t("coverages.coterie")}
          subtitle={t("coverages.coterie_sub")}
          href="https://app.coterieinsurance.com/quote?p=info%40caballero-associates.com"
          logoSrc={coterieLogo}
        />

        <CoverageCard
          title={t("coverages.rocket")}
          subtitle={t("coverages.rocket_sub")}
          href="https://widget.rocketmga.com/iframe"
          logoSrc={rocketLogo}
        />
      </div>
    </section>
  );
}
