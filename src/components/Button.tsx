export const Button = ({
  label,
  onClick,
  className,
}: {
  label: string;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {label}
    </button>
  );
};
