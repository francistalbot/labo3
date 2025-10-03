import type { ReactNode } from "react";

// Composant Card principal
export const Card = ({
  children,
  bgColor,
  className = "",
}: {
  children: ReactNode;
  bgColor: string;
  className?: string;
}) => {
  return (
    <div
      className={`card w-full h-full flex flex-col items-center justify-center text-center p-4 rounded-lg ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
};

// Sous-composant CardHeader
export const CardHeader = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`card-header mb-3 w-full ${className}`}>{children}</div>
  );
};

// Sous-composant CardIcon
export const CardIcon = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div className={`card-icon ${className}`}>
      <img src={src} alt={alt} className=" object-contain max-h-inherit " />
    </div>
  );
};

// Sous-composant CardContent
export const CardContent = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`card-content ${className}`}>{children}</div>;
};
