import React from 'react';

/**
 * Reusable Button Component — Light Editorial Theme
 * Crisp rectangular controls (rounded-[4px]) with high-contrast ink-black and white.
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  as = 'button',
  href,
  target,
  rel,
  ...rest
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium tracking-tight transition-colors duration-150 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] disabled:opacity-50 disabled:pointer-events-none select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 min-h-[34px]',
    md: 'text-sm px-4.5 py-2.5 gap-2 min-h-[42px]',
    lg: 'text-sm sm:text-base px-6 py-3.5 gap-2.5 min-h-[48px]',
  };

  const variantStyles = {
    primary:
      'bg-[#1A1A1A] text-white hover:bg-black/90 active:bg-neutral-900',
    secondary:
      'bg-[#F4F4F5] text-[#1A1A1A] border border-[#E4E4E7] hover:bg-[#E4E4E7] active:bg-neutral-300',
    outline:
      'bg-transparent text-[#1A1A1A] border border-[#E4E4E7] hover:border-[#1A1A1A] hover:bg-[#F4F4F5]',
    accent:
      'bg-[#114576] text-white hover:bg-[#0e365c] active:bg-[#0a2742]',
    ghost:
      'bg-transparent text-[#1A1A1A] hover:bg-[#F4F4F5]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (as === 'a' || href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={combinedClasses}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
