import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  href,
  onClick,
  className = '',
  icon = null,
  ...props
}) {
  const baseClass = `btn btn-${variant} ${className}`.trim();

  if (as === 'a' || href) {
    return (
      <a href={href} onClick={onClick} className={baseClass} {...props}>
        {children}
        {icon && <span className="btn-icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClass} {...props}>
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
}
