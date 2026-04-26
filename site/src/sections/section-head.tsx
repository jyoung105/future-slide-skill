interface SectionHeadProps {
  title: string;
}

export function SectionHead({ title }: SectionHeadProps) {
  return (
    <h2 className="home-dimmable-block force-english-serif home-section-label">
      {title}
    </h2>
  );
}
