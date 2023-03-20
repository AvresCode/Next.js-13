import Link from "next/link";
import Image from "next/image";
export default function Movie({ title, id, release_date, poster_path }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <Link href={`/${id}`}>
        <h1> {title}</h1>
        <p>{release_date}</p>
        <Image
          src={imagePath + poster_path}
          alt={title}
          width={300}
          height={500}
        />
      </Link>
    </div>
  );
}
