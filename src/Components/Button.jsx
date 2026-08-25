import React from 'react';

export const Button = ({ className = "", size = "default", children, ...props }) => {
  // Base styles using your Tailwind v4 theme variables
  const baseClasses = 
    "relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold transition-all duration-300 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 active:scale-95 " +
    "bg-primary text-primary-foreground hover:brightness-110 " +
    "shadow-[0_0_15px_rgba(32,178,166,0.2)] hover:shadow-[0_0_25px_rgba(32,178,166,0.4)]";

  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    default: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size] || sizeClasses.default} ${className}`;

  return (
    <button className={classes} {...props}>
      {/* Glossy overlay effect for extra flair */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};