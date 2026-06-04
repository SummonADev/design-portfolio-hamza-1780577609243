interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{title}</h2>
      {subtitle && <p className="text-gray-400 max-w-2xl mx-auto text-lg">{subtitle}</p>}
      <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
    </div>
  );
}