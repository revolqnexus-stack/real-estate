import TextReveal from '@/components/shared/TextReveal';

interface SectionLabelProps {
  text: string;
  className?: string;
}

export default function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <TextReveal className={className}>
      <span className="t-label">{text}</span>
    </TextReveal>
  );
}
