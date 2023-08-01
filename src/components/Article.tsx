interface ArticleProps {
  img: string;
  h1: string;
  h2: string;
  p: string;
}

export default function Article({ img, h1, h2, p }: ArticleProps) {
  return (
    <div className="py-5">
      <div className="flex gap-4">
        <img src={img} alt="retro-pc-picture" className="h-40" />
        <div>
          <h1 className="inter-800 mb-3 text-5xl text-gray-400">{h1}</h1>
          <h2 className="inter-800 my-4 text-xl">{h2}</h2>
          <p className="inter-400 text-md text-base text-gray-500">{p}</p>
        </div>
      </div>
    </div>
  );
}
