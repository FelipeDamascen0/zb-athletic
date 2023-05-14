interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({text, className, onClick}: ButtonProps) => {
  return <button className={className} onClick={onClick}>{text}</button>
}