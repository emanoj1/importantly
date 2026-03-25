import Container from "./Container";

export default function Section({
  id,
  className = "",
  eyebrow,
  title,
  description,
  children,
}) {
  const classes = ["service-section", className].filter(Boolean).join(" ");

  return (
    <Container as="section" id={id} className={classes}>
      {(eyebrow || title || description) && (
        <div className="service-section-heading">
          {eyebrow && <p className="service-section-eyebrow">{eyebrow}</p>}
          {title && <h2>{title}</h2>}
          {description && (
            <p className="service-section-description">{description}</p>
          )}
        </div>
      )}

      {children}
    </Container>
  );
}
