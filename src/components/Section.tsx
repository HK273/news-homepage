interface SectionProps {
  h2: string;
  p: string;
}

export default function Section({ h2, p }: SectionProps) {
  return (
    <>
      <article>
        <h2 className="inter-700 my-6 text-xl text-white">{h2}</h2>
        <p className="inter-400 text-md mb-10 text-gray-400">{p}</p>
      </article>
    </>
  );
}
