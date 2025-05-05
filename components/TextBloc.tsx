type TextBlocProps = {
    texts: string[];
  };
  
  const TextBloc = ({ texts }: TextBlocProps) => {
    return (
      <div className="flex flex-col items-center text-vert-fonce w-full text-xl sm:text-2xl font-bold text-center md:max-w-3xl py-8">
        {texts.map((text, index) => (
          <h3 key={index}>{text}</h3>
        ))}
      </div>
    );
  };
  
  export default TextBloc;
  