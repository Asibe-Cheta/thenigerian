interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  subheading?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  const centerClass = align === 'center' ? 'text-center items-center' : ''
  const textColor = light ? 'text-white' : 'text-[#0d0d0d]'
  const mutedColor = light ? 'text-white/50' : 'text-[#3a3a3a]'
  const accentColor = 'text-[#3b6e52]'

  return (
    <div className={`flex flex-col gap-3 ${centerClass}`}>
      {eyebrow && (
        <span className={`text-xs font-bold uppercase tracking-widest ${accentColor}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black ${textColor}`}>{heading}</h2>
      {subheading && (
        <p className={`text-base md:text-lg leading-relaxed max-w-xl mt-1 ${mutedColor}`}>
          {subheading}
        </p>
      )}
    </div>
  )
}
