type TextBlocProps = {
    texts: string[];
  };
  
  const TextBloc = ({ texts }: TextBlocProps) => {
    return (
      <div className="mx-auto flex flex-col items-center text-vert-fonce text-2xl sm:text-3xl font-bold text-center md:max-w-5xl py-12 p-4">
        {texts.map((text, index) => (
          <h3 key={index}>{text}</h3>
        ))}
      </div>
    );
  };
  
  export default TextBloc;
  