interface BorderCardProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  bgColor?: string;
}

const BorderCard = ({ children, className, bgColor }: BorderCardProps) => (
  <div
    className={`ml-0 lg:ml-16 pl-6 lg:pl-[60px] border border-white content-center  ${
      bgColor ? `border-${bgColor}` : ""
    } border-l-green ${className}`}
  >
    {children}
  </div>
);

export default BorderCard;
