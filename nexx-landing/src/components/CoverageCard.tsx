type CoverageCardProps = {
  title: string;
  subtitle?: string;
  href: string;
  logoSrc: string;
};

export default function CoverageCard({
  title,
  subtitle = "Get a Quote",
  href,
  logoSrc,
}: CoverageCardProps) {
  return (
    <a
      className="coverage-card"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="card-icon">
        <img src={logoSrc} alt={title} />
      </div>

      <div className="card-text">
        <h3>{title}</h3>
        <span>{subtitle}</span>
      </div>
    </a>
  );
}
