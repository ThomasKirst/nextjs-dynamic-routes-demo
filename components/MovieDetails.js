import Image from "next/image";

export default function MovieDetails({ title, year, description, cover }) {
  return (
    <>
      <h1>
        {title} <small>{year}</small>
      </h1>
      <p>{description}</p>
      <Image src={cover} alt={title} width={200} height={290} />
    </>
  );
}
