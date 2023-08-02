interface HeadingProps {
  text: string;
  className?: string;
}

export const AppHeading = ({ text }: HeadingProps) => {
  return (
    <h2 className={`text-3xl lg:text-4xl text-white py-2 font-semibold`}>
      {text}
    </h2>
  );
};

export const SubHeading = ({ text, className }: HeadingProps) => {
  return <h2 className={`text-2xl text-blue-600 ${className}`}>{text}</h2>;
};
