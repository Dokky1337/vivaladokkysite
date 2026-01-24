import React from 'react';

const ModernButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  icon = null,
  onClick,
  disabled = false,
  ...props 
}) => {
  const baseClass = 'modern-button';
  const variantClass = `modern-button--${variant}`;
  const sizeClass = `modern-button--${size}`;
  const disabledClass = disabled ? 'modern-button--disabled' : '';
  
  const className = `${baseClass} ${variantClass} ${sizeClass} ${disabledClass}`.trim();

  return (
    <button 
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className="button-content">
        {icon && <span className="button-icon">{icon}</span>}
        <span className="button-text">{children}</span>
      </span>
      <div className="button-ripple"></div>
      <div className="button-glow"></div>
    </button>
  );
};

export default ModernButton;