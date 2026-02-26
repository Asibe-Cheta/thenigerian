import { ButtonHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
}

const base =
  'inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm'

const variants = {
  primary: 'bg-[#3b6e52] text-white hover:bg-[#4e8f6a] active:scale-[0.98]',
  secondary: 'bg-white text-[#0d0d0d] hover:bg-[#f5f3ef] active:scale-[0.98]',
  ghost: 'bg-transparent text-white hover:bg-white/10 active:scale-[0.98]',
  outline:
    'bg-transparent border border-current text-[#3b6e52] hover:bg-[#3b6e52] hover:text-white active:scale-[0.98]',
}

const sizes = {
  sm: 'text-xs px-4 py-2',
  md: 'text-sm px-6 py-3',
  lg: 'text-base px-8 py-4',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, external, className = '', children, ...rest }, ref) => {
    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

    if (href) {
      const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
      return (
        <Link href={href} className={classes} {...externalProps}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...rest}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
