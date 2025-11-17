import React from 'react';

export const LoadingSpinner: React.FC = () => (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

export const MagicWandIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 4V2"/>
        <path d="M15 10V8"/>
        <path d="M10 4V2"/>
        <path d="M10 10V8"/>
        <path d="M5 4V2"/>
        <path d="M5 10V8"/>
        <path d="m17.8 12.2-1.2-1.2"/>
        <path d="m21.2 8.8-1.2-1.2"/>
        <path d="m14 16 3-3"/>
        <path d="M22 22 8 8"/>
        <path d="m4.8 15.2-1.2-1.2"/>
        <path d="m8.2 11.8-1.2-1.2"/>
        <path d="M12.2 17.8 11 19"/>
    </svg>
);

export const ImageIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
        <circle cx="9" cy="9" r="2"/>
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
    </svg>
);
