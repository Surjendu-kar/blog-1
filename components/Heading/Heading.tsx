interface HeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  titleFontSize?: string;
  descriptionFontSize?: string;
}

const Heading: React.FC<HeadingProps> = ({
  subtitle = "BLOG",
  title,
  description,
  titleFontSize = "50px",
  descriptionFontSize = "14px",
}) => {
  return (
    <div className="my-10 mx-5">
      {subtitle && (
        <p className="text-center text-sm text-[#00C7BE]">{subtitle}</p>
      )}
      <h1 className="font-bold" style={{ fontSize: titleFontSize }}>
        {title}
      </h1>
      {description && (
        <p className="text-[#595959]" style={{ fontSize: descriptionFontSize }}>
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;
