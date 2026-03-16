import { useRef, useEffect, useState } from "react";

import ahoyLogo from "../assets/brands/ahoy.svg";
import ascendantLogo from "../assets/brands/Ascendant.png";
import bessoLogo from "../assets/brands/besso.png";
import corvusLogo from "../assets/brands/Corvus.png";
import coterieLogo from "../assets/brands/coterie.png";
import fristLogo from "../assets/brands/First.png";
import fosxquiltLogo from "../assets/brands/Foxquilt.png";
import great2Logo from "../assets/brands/great2.png";
import hagertyLogo from "../assets/brands/Hagerty.png";
import hiscoxLogo from "../assets/brands/Hiscox_logo.png";
import jewelersMutualLogo from "../assets/brands/Jewelers Mutual.png";
import kangaroo2Logo from "../assets/brands/Kangaroo2.png";
import logoPrimmeLogo from "../assets/brands/logo-prime.svg";
import lloydsOfLondonLogo from "../assets/brands/loydsoflondon.png";
import nationalGeneralLogo from "../assets/brands/national-general.png";
import nextLogo from "../assets/brands/Next.svg";
import sliceLogo from "../assets/brands/Slice.png";
import thimbleLogo from "../assets/brands/thimble_logo.png";
import threeLogo from "../assets/brands/three.png";
import transportationLogo from "../assets/brands/Transporattion.png";
import travelersLogo from "../assets/brands/travelers-logo.png";
import unitedAutoLogo from "../assets/brands/United Auto.svg";
import usliLogo from "../assets/brands/usli.png";
import webKinsaleLogo from "../assets/brands/web_kinsale.png";
/* 👇 aquí asumo que el archivo NO tiene dos puntos (:) porque Windows no deja.
   Usa por ejemplo: Zurich_Insurance_Horizontal.png */
import zurichLogo from "../assets/brands/Zurich_Insurance_Horizontal.png";

type Brand = {
  id: string;
  name: string;
  logo: string;
};

const BASE_BRANDS: Brand[] = [
  { id: "ahoy", name: "Ahoy", logo: ahoyLogo },
  { id: "ascendant", name: "Ascendant", logo: ascendantLogo },
  { id: "besso", name: "Besso", logo: bessoLogo },
  { id: "corvus", name: "Corvus", logo: corvusLogo },
  { id: "coterie", name: "Coterie", logo: coterieLogo },
  { id: "frist", name: "Frist", logo: fristLogo },
  { id: "fosxquilt", name: "Fosxquilt", logo: fosxquiltLogo },
  { id: "great2", name: "Great2", logo: great2Logo },
  { id: "hagerty", name: "Hagerty", logo: hagertyLogo },
  { id: "hiscox", name: "Hiscox", logo: hiscoxLogo },
  { id: "jewelers-mutual", name: "Jewelers Mutual", logo: jewelersMutualLogo },
  { id: "kangaroo2", name: "Kangaroo2", logo: kangaroo2Logo },
  { id: "prime", name: "Primme", logo: logoPrimmeLogo },
  { id: "lloyds-of-london", name: "Lloyds of London", logo: lloydsOfLondonLogo },
  { id: "national-general", name: "National General", logo: nationalGeneralLogo },
  { id: "next", name: "Next", logo: nextLogo },
  { id: "slice", name: "Slice", logo: sliceLogo },
  { id: "thimble", name: "Thimble", logo: thimbleLogo },
  { id: "three", name: "Three", logo: threeLogo },
  { id: "transportation", name: "Transportation", logo: transportationLogo },
  { id: "travelers", name: "Travelers", logo: travelersLogo },
  { id: "united-auto", name: "United Auto", logo: unitedAutoLogo },
  { id: "usli", name: "USLI", logo: usliLogo },
  { id: "web-kinsale", name: "Kinsale", logo: webKinsaleLogo },
  { id: "zurich", name: "Zurich Insurance", logo: zurichLogo },
];

// duplicamos para el loop infinito
const BRANDS: Brand[] = [...BASE_BRANDS, ...BASE_BRANDS];

export default function BrandsCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // auto-scroll infinito, suave
  useEffect(() => {
    const step = 0.7; // píxeles por tick (más pequeño = más lento)
    const delay = 40; // ms por tick

    const id = setInterval(() => {
      const track = trackRef.current;
      if (!track || isPaused) return;

      const halfWidth = track.scrollWidth / 2;
      if (!halfWidth) return;

      const next = (track.scrollLeft + step) % halfWidth;
      track.scrollLeft = next;
    }, delay);

    return () => clearInterval(id);
  }, [isPaused]);

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  return (
    <section className="brands-section">
      <div className="container">
        <div
          className="brands-carousel"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
        >
          <div className="brands-track" ref={trackRef}>
            {BRANDS.map((brand, index) => (
              <div className="brand-logo" key={`${brand.id}-${index}`}>
                <img src={brand.logo} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
