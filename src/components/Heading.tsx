const Heading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <header className="text-center min-h-40 flex flex-col items-center justify-center">
      <h1 className=" text-4xl mb-2 font-bold max-md:text-2xl max-sm:text-2xl">
        {title}
      </h1>
      <p className="text-neutral-400  text-lg max-md:text-sm max-sm:text-sm">
        {description}
      </p>
    </header>
  );
};

export default Heading;
